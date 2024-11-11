const dbConnect = require('./mogoDb');
const express = require('express')
const mongodb = require('mongodb')
const cors = require('cors')
const app  = express();


app.use(express.json());

app.use(cors());

app.get('/', async (req, res)=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    res.send(data);

})
app.get('/:name', async (req, res)=>{
    let data = await dbConnect();
    data = await data.find({name:req.params.name}).toArray();
    res.send(data);

})
app.post('/', async (req,res)=>{
    let data = await dbConnect();
    console.log(req.body);
    let obj = { "name": req.body.name, "salary": req.body.salary, "designation": req.body.designation }
    
    let result = await data.insertOne(obj);
   
    res.send({name:'successfully data created'});
})

app.put('/', async (req, res) => {
    let data = await dbConnect();
    console.log(req.body);
    let filter = { "name": req.body.name }; // Update based on the 'name' field
    let updateData = {
        $set: {
            "salary": req.body.salary,
            "designation": req.body.designation
        }
    };
    let result = await data.updateOne(filter, updateData);
    res.send({ status: 'success', modifiedCount: result.modifiedCount });
});


app.put('/:name', async (req, res) => {
    let data = await dbConnect();
    console.log(req.body);
    let filter = { "name": req.params.name }; // Update based on the 'name' field
    let updateData = {
        $set: {
            "name":req.body.name,
            "salary": req.body.salary,
            "designation": req.body.designation
        }
    };
    let result = await data.updateOne(filter, updateData);
    res.send({ status: 'success', modifiedCount: result.modifiedCount });
});


app.delete('/:name', async (req,res)=>{
    let data = await dbConnect();
    let filter = { "name": req.params.name };
    let result = await data.deleteOne(filter);
    console.log(req.params)
    res.send({status : 'deleted data sucessfully'})

})

app.listen(6500);
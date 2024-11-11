const dbConnect = require('./mogoDb');


async function main(){
    let data = await dbConnect();
    data = await data.find({}).toArray();
   
}

main();
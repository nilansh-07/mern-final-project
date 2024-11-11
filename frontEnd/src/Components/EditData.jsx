import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function EditData() {
  const { name } = useParams();

  const [stu, setStu] = useState({});
  const navigate = useNavigate()
  
  async function getData() {
    const d = await axios.get('http://localhost:6500/' + name)

    const [s] = d.data;
    console.log(s);
    setStu(s);
  }

  useEffect(function () {
    getData();
  }, []);

  async function HandlerUpdate() {
    console.log('testing')
    const d = await axios.put('http://localhost:6500/' + name, stu)
    console.log(d);
    navigate('/')

  }
  return (
    <div className='row '>
      <h1>Edit here</h1>
      <div className='offset-3 shadow mt-3 p-3 col-sm-5'>

        <div className="mb-3">
          <label  className="form-label">Id </label>

        </div>
        <div className="mb-3">
          <label  className="form-label">Name</label>
          <input onChange={(e) => setStu({ ...stu, name: e.target.value })} type="text" value={stu.name} className="form-control" id="" />  

        </div>

        <div className="mb-3">
          <label  className="form-label">Salary</label>
          <input onChange={(e) => setStu({ ...stu, salary: e.target.value })} type="text" value={stu.salary} className="form-control" id="" />
        </div>
        <div className="mb-3">
          <label  className="form-label">Designation</label>
          <input onChange={(e) => setStu({ ...stu, designation: e.target.value })} type="text" value={stu.designation} className="form-control" id="" />
        </div>

        <button onClick={() => HandlerUpdate()} type="submit" className="btn btn-primary">Update</button>

      </div>
    </div>
  );
}

export default EditData;
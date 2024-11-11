import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateMyOwnApiForm() {

  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')
  const [designation, setDesignation] = useState('')

  const navigate = useNavigate();
  async function HandlerSubmit() {


    const data = { name, salary, designation };
    console.log(data);

    const r = await axios.post('http://localhost:6500/', data)
    console.log(r);
    navigate('/');

  }
  return (
    <div className='row '>
      {/* <h1>Create Here</h1> */}
      <div className='offset-3 shadow mt-3 p-3 col-sm-5'>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="" />

        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="text" onChange={(e) => setSalary(e.target.value)} className="form-control" id="" />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input type="text" onChange={(e) => setDesignation(e.target.value)} className="form-control" id="" />
        </div>



        <button type="submit" onClick={() => HandlerSubmit()} className="btn btn-primary">Submit</button>

      </div>
    </div>
  );
}

export default CreateMyOwnApiForm;
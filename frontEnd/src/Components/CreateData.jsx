import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateData() {

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [city, setCity] = useState('')
  const [course, setCourse] = useState('')
  const navigate = useNavigate();

  async function HandlerSubmit() {

    // console.log(name, mobile, city, course);
    const data = { name, mobile, city, course };
    console.log(data);

    const r = await axios.post('https://642cb7d4bf8cbecdb4f5beaa.mockapi.io/api/v1/coerproject', data)
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
          <label className="form-label">Mobile</label>
          <input type="text" onChange={(e) => setMobile(e.target.value)} className="form-control" id="" />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" onChange={(e) => setCity(e.target.value)} className="form-control" id="" />
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Course</label>
          <input type="text" onChange={(e) => setCourse(e.target.value)} className="form-control" id="" />
        </div> */}



        <button type="submit" onClick={() => HandlerSubmit()} className="btn btn-primary">Submit</button>

      </div>
    </div>
  );
}

export default CreateData;
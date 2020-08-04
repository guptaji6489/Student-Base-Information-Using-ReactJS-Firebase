// rafce

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../layout/Input';

const StudentForm = () => {
    const {id} = useParams();
    const [student, setStudent] = useState({
        name:"",
        email:"",
        phone:"",
        standard:"",
        address1:"",
        address2:""

    });

    const onInputChange = (e) =>{
        setStudent({...student,[e.target.name]:e.target.value})
    }
    const submitForm = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
  <div className="py-4">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className="card card-body shadow">
          <form onSubmit={submitForm}>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
              <Input  placeholder="Enter Student Name"  name="name" value={student.name} 
                  onChange={onInputChange}/>
                </div>
              <div className="col-md-6">
              <Input placeholder="Enter Student E-mail"
                  name="email"
                  value={student.email} 
                  onChange={onInputChange}/>
              </div>
            </div>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
              <Input placeholder="Enter Student Phone"
                  name="phone"
                  value={student.phone} 
                  onChange={onInputChange}/>
                 </div>
              <div className="col-md-6">
              <Input placeholder="Enter Student Standard"
                  name="standard"
                  value={student.standard} 
                  onChange={onInputChange}/>
                 </div>
            </div>
            <div className="form-row form-group">
              <div className="col-md-6">
              <Input placeholder="Enter Student Address"
                  name="address1"
                  value={student.address1} 
                  onChange={onInputChange}/>
                </div>
              <div className="col-md-6">
              <Input placeholder="Language Known"
                  name="address2"
                  value={student.standard} 
                  onChange={onInputChange}/>
                 </div>
            </div>

            <button type="submit" className="btn btn-primary">
             {
                 id ? "Update Student" : "Add Student"
             }
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default StudentForm

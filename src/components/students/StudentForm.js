// rafce

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../layout/Input";
import { useFirestore } from "react-redux-firebase";

const StudentForm = () => {
  const firestore = useFirestore();
  let history = useHistory();
  const { id } = useParams();
  const docRef= id? firestore.collection("students").doc(id):null;
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    standard: "",
    address1: "",
    address2: "",
  });

  useEffect(()=>{
    if(id)
    {
      loadStudent();
    }
  },[id]);

  const loadStudent= async ()=>{
    try {
      const result = await docRef.get();
      if(result.exists)
      {
        setStudent(result.data());
      }
      else{
        console.log("No Such Students!")
      }
      
    } catch (error) {
      console.log("error");
    }
  }

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const submitForm =async (e) => {
    e.preventDefault();
    if (id) {
      await docRef.update({ ...student, updatedAt: firestore.FieldValue.serverTimestamp() });
    } else {
      firestore
        .collection("students")
        .add({ ...student, createdAt: firestore.FieldValue.serverTimestamp() });
    }
    history.push('/');
  };
  return (
    <div>
      <div className="container">
        <div className="py-4">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card card-body shadow">
                <form onSubmit={submitForm}>
                  {/* <div className="form-row form-group mb-4"> */}
                    <div className="col-md-12">
                      <Input
                        placeholder="Enter Student Name"
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={onInputChange}
                      /><br></br>
                    </div>
                    <div className="col-md-12">
                      <Input
                        placeholder="Enter Student E-mail"
                        name="email"
                        type="email"
                        value={student.email}
                        onChange={onInputChange}
                      /><br></br>
                    </div>
                  {/* </div> */}
                  {/* <div className="form-row form-group mb-4"> */}
                  <div className="col-md-12">
                      <Input
                        placeholder="Enter Password"
                        name="standard"
                        type="number"
                        value={student.standard}
                        onChange={onInputChange}
                      /><br></br>
                    </div>
                    <div className="col-md-12">
                      <Input
                        placeholder="Whatsapp/Calling No"
                        name="phone"
                        type="number"
                        value={student.phone}
                        onChange={onInputChange}
                      /><br></br>
                    </div>
                    
                  {/* </div> */}
                  {/* <div className="form-row form-group"> */}
                    <div className="col-md-12">
                      <Input
                        placeholder="Enter Student Address"
                        name="address1"
                        type="text"
                        value={student.address1}
                        onChange={onInputChange}
                      /><br></br>
                    </div>
                    <div className="col-md-12">
                      <Input
                        placeholder="Technical Language Known"
                        name="address2"
                        type="text"
                        value={student.address2}
                        onChange={onInputChange}
                      /><br></br>
                    </div>
                  {/* </div> */}

                  <button type="submit" className="btn btn-primary">
                    {id ? "Update Student" : "Add Student"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;

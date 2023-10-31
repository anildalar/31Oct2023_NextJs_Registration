"use client"

import { useState } from "react";
import Swal from "sweetalert2";

//1. Import Area


//2. Defination
function Home() {
  //2.1
  const [title,setTitle] = useState('Registration Page');
  const [payload,setPayload] = useState({
                                          "name": "",
                                          "email": "",
                                          "password": "",
                                          "role":"ADMIN"
                                        });


  //2.2 function defination area
  let handleChange = (e)=>{
    console.log(e.target.name);
    setPayload({
      ...payload, // ... is called spread operator
      [e.target.name]:e.target.value
    })
  }

  let SubmitData = async ()=>{
      console.log('good Morning..',payload);
      try {
        const res = await fetch('/api/register',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
        const data = await res.json();

        Swal.fire(
          'Good job!',
          'User Registered successfully',
          'success'
        )
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      

  }


  //2.3 Return statment
  return (
   <>
    <div className="container">        
        <div className="card mt-5">
          <div className="card-header text-center">
            <h1>{title}</h1>
          </div>
          <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input name="name" type="email" className="form-control" id="name" aria-describedby="name" onChange={handleChange} />
               </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input name="email" type="email" className="form-control" id="email" aria-describedby="email" onChange={handleChange} />
               </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input name="password" type="password" className="form-control" id="password" onChange={handleChange} />
                </div>
              </form>
          </div>
          <div className="card-footer text-center">
            <button className="btn btn-primary" onClick={SubmitData}>Register</button>
          </div>
        </div>
    </div>
   </>
  )
}


//3 Export Area
export default Home;

import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth"
import {Link, useNavigate } from "react-router-dom";




function Login() {
   
    const[email,setEmail]=useState("")
    const[pswd,setPswd]=useState("")
   
   const navigate=useNavigate()

   const firebaseConfig = {
    apiKey: "AIzaSyAg0WyEiR0PfwQrW0eVwvomJF-f4CdC0SE",
    authDomain: "prakash-c18b2.firebaseapp.com",
    projectId: "prakash-c18b2",
    storageBucket: "prakash-c18b2.appspot.com",
    messagingSenderId: "1034393068704",
    appId: "1:1034393068704:web:40b3212528cbb4b51415c5",
    measurementId: "G-0L9FN724VG"
  };

  const app = initializeApp(firebaseConfig);
const auth=getAuth()

const submitOn = (event) => {
  event.preventDefault()

  let obj={
    email:email,
    password:pswd
  }
  signInWithEmailAndPassword(auth,obj.email,obj.password)

    .then(()=>{
        alert("Your Login page successfully created..")
        navigate("/")
    })
    .catch((err)=>{
        alert("Error",err)
    })
 

}
    
  return (
    <div className="container" style={{width:"400px"}}>
      <div className="card my-5 p-4" id="two" style={{border:"2px solid black",marginTop:"100px"}}>
        <div className="card-title">
          <h2 style={{color:"blue",textAlign:"center"}}>Login Your Account</h2>
        </div>
        <div className="card-body">
          <form onSubmit={submitOn}>

            <div class="mb-3">
              <label class="form-label">Email </label>
              <input value={email} onChange={e=> setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">Password </label>
              <input value={pswd} onChange={e=> setPswd(e.target.value)} type="password" class="form-control" id="exampleInputEmail1" required/>
            </div>

           
           
            <button type="submit" class="btn btn-primary"style={{width:"300px"}} >Login</button>
           
          </form>
          <div>
            <a>If you don't have account a account
              <Link to="/sign" >Register</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
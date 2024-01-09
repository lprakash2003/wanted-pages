import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import   {useState } from "react";
import {Link, useNavigate } from "react-router-dom";


function Sign() {
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pswd,setPswd]=useState("") 
    const[cpwd,setCpwd]=useState("")

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

  if(name.length<=5){
    alert("Minimum < 6 charachter manadatoery....!")
  }
    if(pswd != cpwd){
    alert("Password dose not match..!")
  }

  let obj={
    email:email,
    password:pswd
  }
  createUserWithEmailAndPassword(auth,obj.email,obj.password)
   
  .then(()=>{
    alert("Registered Successfully")
    navigate("/login")
})

  .catch((err)=>{
    alert("Error",err)
})


}
    
  return (
    <div className="container" style={{width:"400px"}} >
      <div className="card my-5 p-4" id="one" style={{border:"2px solid black",height:"550px"}}>
        <div className="card-title">
          <h2 style={{color:"red"}}>SignUp Your Account</h2>
        </div>
        <div className="card-body" >
          <form onSubmit={submitOn}  >
            <div class="mb-3" >
              <label class="form-label">Name </label>
              <input value={name} onChange={e=> setName(e.target.value)} type="text" class="form-control" id="exampleInputName" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Email </label>
              <input value={email} onChange={e=> setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">Password </label>
              <input value={pswd} onChange={e=> setPswd(e.target.value)} type="password" class="form-control" id="exampleInputEmail2" required/>
            </div>

            <div class="mb-3">
              <label class="form-label">Confirm Password </label>
              <input value={cpwd} onChange={e=> setCpwd(e.target.value)} type="password" class="form-control" id="exampleInputEmail3" required/>
            </div>

            <button type="submit" class="btn btn-primary"style={{width:"300px"}} > Submit</button>
          </form>
          <div>
            <a>If Already Account There
              <Link to="/login" >Login</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
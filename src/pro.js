import { useEffect, useState } from "react"
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {signOut, getAuth} from "firebase/auth"
import {UserAuth} from "./user";
import Page from "./pagemove";

function Fetch(){

    const[data,setData]=useState([])
    const[value,setValue]=useState("")
    const navigate =useNavigate()

    let currentUser=UserAuth()


    useEffect(()=>{
       fetch("https://pro-page.onrender.com/posts")
       .then((res)=>{
          return res.json()
       })
       .then((resp)=>{
          setData(resp)
       })
    },[])

    const addData = (id) => {
      fetch("https://pro-page.onrender.com/posts/" + id)
          .then((res) => {
              return res.json()
          })
          .then((resp) => {
              fetch("https://pro-page.onrender.com/get", {
                  method: "POST",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify(resp)
              })
                  .then(() => {
                      alert("Cart Addede")
                  })
          })
          .catch((err)=>{
              console.log(err)
          })
  }
    
   const Search = async (event) => {
    event.preventDefault();
    return await axios.get(`https://pro-page.onrender.com/posts?q=${value}`)
      .then((res) => {
        setData(res.data);
        setValue("")
      })
      .catch((err) => {
        console.log(err);
      });
  };


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
  const auth = getAuth();

  
const submitOn = (event) => {
  event.preventDefault()

  
  signOut(auth)
   navigate("/login")
 

}

const[count,setCount]=useState(0)

useEffect(() => {
  fetch("https://pro-page.onrender.com/get")
      .then((res) => {
          return res.json()
      })
      .then((resp) => {
          setCount(resp)

        
        })
      }, [])
      

  const[page,setPage]=useState(1)
const[record,setRecord]=useState(8)


let live=page * record 
let five=live - record


let myData=data.slice(five,live)

const UpdatePage=(n)=>{
  setPage(n)
}
const next=()=>{
  // if(value=>1){
  //   return true
  // }
  setPage(page+1)
}

const prev=()=>{
  // if(value<=1){
  //   return false
  // }
  setPage(page-1)
}

    return(
      <div>
            <nav class="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-color-rgb">
                    <div class="container-fluid">
                        <img class="navbar-brand" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UwtULR0EQ6e6V0BFypevI70LSWm-jPMpBw&usqp=CAU" style={{width:"100px",height:"80px",marginLeft:"30px"}}/>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div class="navbar-nav" style={{marginLeft:"70px",gap:"80px"}} >

             
<form className="d-flex" role="search"  onSubmit={Search}>
      <input className="form-control me-2" type="search"   placeholder="Search for Product" aria-label="Search" style={{width:"350px"}} value={value}  onChange={(e) => setValue(e.target.value)} />
    </form>
                      <Link to="/addcart">
                    <a class="nav-link" href="#" style={{fontSize:""}}><i class="fa-solid fa-bag-shopping" style={{fontSize:"30px"}}></i><span className="val" style={{position:"absolute",right:"611px",top:"24px",borderRadius:"60px",fontSize:"12px"}} class="badge text-bg-danger">{count.length}</span></a>
                    </Link>
                   
                    <h2 style={{marginLeft:"50px",border:"1px dashed black",borderRadius:"20px",width:"200px",textAlign:"center"}} className="navbar-brand">
        <i class="fa-solid fa-user"   ></i>   {currentUser?. email}
         </h2>

                    <a className="navbar-brand">
        <Link to="/login" >  
            <a className="btn btn-danger" style={{ marginLeft: "50px"}} onClick={submitOn}> Logout</a>
         </Link>    
        </a>
                </div>
            </div>
                      </div>
                </nav>
         <div id="pro">
             {myData.map((one)=>(
                <div id="a">
                    <img src={one.img} style={{width:"150px",height:"150px",marginLeft:"40px"}} />
                    <h6 style={{opacity:"0.5",marginLeft:"40px"}}>{one.name}</h6>
                    <p style={{marginLeft:"40px"}}>{one.dep}</p>
                    <h6><span style={{color:"mediumseagreen",marginLeft:"40px"}}>$</span>{one.price}</h6>
                    <a className="btn btn-success" style={{marginLeft:"60px"}} onClick={()=>{addData(one.id)}} >ADD CART</a>
                 <br/> <br/>
                </div>
             ))}
         </div>

         <br/> <br/>

         <Page total={data.length} record={record} update={UpdatePage} next={next} prev={prev} />
         <br/> <br/> <br/> <br/>
         <div className="card-group" id="das">
           
           <div className="card" style={{backgroundColor:"aliceblue"}}>
                <div className="card-body">
                <h2 className="card-title">Logo</h2>
                    <p className="card-text"> Sub line</p>
                </div>
           </div>
            <div className="card" style={{backgroundColor:"aliceblue"}}>

                <div className="card-body">
                    <h2 className="card-title">Pages</h2>
                    <p className="card-text"> About us</p>
                    <p className="card-text"> Our experince</p>
                    <p className="card-text"> Testimonnials</p>
                    <p className="card-text"> Skiin & hair</p>
                    <p className="card-text"> Shop</p>
                </div>
            </div>
            <div  className="card" style={{backgroundColor:"aliceblue"}}>

                <div className="card-body">
                    <h2 className="card-title">Legal and help</h2>
                    <p className="card-text">FAQs</p>
                    <p className="card-text">Terms of use</p>
                    <p className="card-text">Privacy policy</p>
                </div>
            </div>
            <div  className="card" style={{backgroundColor:"aliceblue"}}>

                <div className="card-body">
                    <h2 className="card-title">Contact us</h2>
                    <p className="card-text"><i class="fa-solid fa-location-dot  fa-lg" style={{color: "#1f5125"}}></i>  Address</p>
                    <p className="card-text"><i class="fa-solid fa-phone  fa-lg" style={{color: "#25511f"}}></i> Phone numbers</p>
                    <p className="card-text"><i class="fa-solid fa-envelope  fa-lg" style={{color: "#20511f"}}></i>  Mail id</p>
                </div>
            </div>

            <div  className="card" style={{backgroundColor:"aliceblue"}}>

                <div className="card-body">
                    <h2 className="card-title">Social links</h2>
                    <br/>
                    <div style={{display:"flex",gap:"20px"}}>
                    <i class="fa-brands fa-facebook  fa-lg fa-xl" style={{color: "#51461f"}}></i>
                    <i class="fa-brands fa-twitter  fa-lg fa-xl" style={{color:" #46511f"}}></i>
                    <i class="fa-brands fa-linkedin  fa-lg fa-xl" style={{color: "#46511f"}}></i>
                    <i class="fa-brands fa-youtube  fa-lg fa-xl" style={{color: "#46511f"}}></i>
                    </div>
                    
                </div>
            </div>
            </div>
      </div>
    )
}
export default Fetch;
import {useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";




function Cart(){

  const[data,setData]=useState([])
  const[total,setTotal]=useState(0)
  const navigate =useNavigate()


  useEffect(()=>{
        fetch("https://pro-page.onrender.com/get")
    .then((res) => {
      return res.json()
    })
    .then((resp) => {
      setData(resp)
    })
  },[])
  const Delete=(id)=>{
    fetch("https://pro-page.onrender.com/get/"+id,{
        method:"DELETE"
    })
    window.location.reload()
   }
   const [value,setValue]=useState(1)

   const increment=()=>{
       setValue(value+1)
   }
 
   const decrement=()=>{
      if(value<=1){
        return false
      }
      setValue (value-1)
  }
   

  



   useEffect(() => {
    fetch("https://pro-page.onrender.com/get")
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            setData(resp)
            const total=resp.reduce((acc,item)=>acc+parseFloat(item.price),0)
            setTotal(total)
        })
}, [])




    return(
        <div>
          <div style={{fontSize:"30px",marginTop:"30px",marginLeft:"50px",color:"red"}}>
            <Link to="/">
              <a><i class="fa-solid fa-house"></i></a>
              </Link>
              <h2 style={{marginLeft:"500px"}}> Total Price:{total}</h2>
          </div>
 <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">IMAGE</th>
      <th scope="col">BRAND</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    
    {data.map((one) => (
      <tr>
      <td scope="row">{one.id}</td>
      <td scope="row"><img src={one.img} style={{width:"100px",height:"150px"}} /></td>
      <td scope="row">{one.name}</td>
      <td scope="row">{one.dep}</td>
      <td scope="row" style={{fontSize:"20px",color:"red"}}> ${one.price}</td>
  
      <td>
      <a id="a" className="btn btn-danger" onClick={()=>{Delete(one.id)}} >Remove</a>
      </td>
      </tr>
    ))}
    
   
  </tbody>
</table>


          </div>        
        </div>
    )
}

export default Cart;
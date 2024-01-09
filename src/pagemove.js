import "./App.css";


function Page({total,record,update,next,prev}){
    let n= Math.ceil(total/record)
    let page=[]
    for (let i=1 ; i<=n; i++){
        console.log(i)
        page.push(i)
    }
    
    console.log(page)
    return(
        <div style={{marginLeft:"600px"}}>
            <div id="kol">
             <ul className="pagination" >
             <li className="page-item">
                    <a href="#" className="page-link" onClick={prev} >Prev</a>
                </li>
                {page.map((one)=>(
                  <li className="page-one">
                      <a href="#" className="page-link"  onClick={()=>{update(one)}}>{one}</a>
                  </li>
                ))}
                 <li className="page-item">
                    <a href="#" className="page-link" onClick={next}>Next</a>
                </li>
             </ul>
             </div>
        </div>
    )
} 

export default Page;
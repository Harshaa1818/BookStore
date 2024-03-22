import React from 'react'
import { useState } from 'react';


function Getd() {
    const[present, setPresent]= useState([])
    const[data,getdata]= useState("");
 

    const searchBook=()=>{

        if(!data)
        {
          alert("Enter Valid Details");   // if invalid author name or publisher name is given then it will give a alert
          return;
        }
        console.log(data);  //if book is present then it will log bookname
      
      
        // axios.get(`${URL}/api/v1/get/${data}`)
        // .then((e)=>{
        //   setPresent(e.data.data);
        //   console.log(present)
        // })
        // .catch((e)=> console.log("error is", e))
      
      }
  return (
    
    <div>
       <div className="Card">
      <input type="text" className="input-data" placeholder="search book by author or publisher name" onChange={(e)=>getdata(e.target.value)} ></input>
      
    
    <button className="button-6" onClick={searchBook} >Search for a book</button><br />
      </div>
    </div>
  )
}

export default Getd

import React from 'react'
import { useState } from 'react';

function Dele() {
    const[id,setId]=useState();
    const deleteBook=()=>{
        if(!id)
        {
          alert("invalid book id")   // if invalid author name or publisher name is given then it will give a alert
          return;
        } 
    
        // axios.delete(URL+`/api/v1/delete/${id}`)
        // .then((res)=>console.log("deleted succesfully"))
        // .catch((e)=> console.log("error is",e))
        // alert("book deleted successfully")
    
        console.log("Book is deleted successfully"); // if book is deleted succesfully then it will log this
      
        
     
      }
  return (
    <div>
       <div className="Card">
      <input type="text" className="input-data" placeholder="enter book id " onChange={(e)=>{setId(e.target.value)}}></input>
      <button className="button-6" onClick={deleteBook}>Delete a book</button>
      </div>
    </div>
  )
}

export default Dele

import React from 'react'
import {useState} from 'react'

function Register() {

    const [Author,setAuthor] = useState("")
  const [bookName,setBookName] = useState("");
  const [Description,setDescription] = useState("");
  const [pages,setPages]  = useState("");
  const [Publisher,setPublisher] = useState("")

  const registeruser=()=>{ // this function will get executed when clicked on "Register Book"

    if(!Author || !bookName || !Description || !pages || !Publisher)    // validation for fields, none should be empty
    {
      alert("All Fields are Mandotary")
      return;
    } 

    // axios.post(URL+"/api/v1/create",{
      
    //     "bookName":bookName,
    //     "description":Description,
    //     "noOfPages":pages,
    //     "authorName":Author,
    //     "publisherName":Publisher
    
    // })
    // .then((res)=>console.log("registered succesfully"))
    // .catch((e)=> console.log("error is",e))
  
    
    console.log({Author, bookName,Description,pages,Publisher});

     alert("book created succesfully")  // if Book is registered it will give this alert
  }
  return (
    <div>
      <div className="Card" style={{justifyContent:"flex-start"}}> 
    
    <label htmlFor="Book name">Book name: </label>
     <input type='text' onChange={(e)=>{setBookName(e.target.value)}}></input>
     <label htmlFor="Description">Description: </label>
     <input type='text' onChange={(e)=>{setDescription(e.target.value)}}></input>
     <label htmlFor="No Of Pages">No Of Pages: </label>
     <input type='text' onChange={(e)=>{setPages(e.target.value)}}></input>
     <label htmlFor="Author Name">Author Name: </label>
     <input type='text' onChange={(e)=>{setAuthor(e.target.value)}}></input>
     <label htmlFor="Publisher Name">Publisher Name: </label>
     <input type='text' onChange={(e)=>{setPublisher(e.target.value)}}></input>
     <button className="button-6" onClick={registeruser}>Register Book</button>
     </div>
    </div>
  )
}

export default Register


import './App.css';
import {useState} from 'react';
import axios from 'axios';


const URL="http://localhost:3000";
function App() {
  const [Author,setAuthor] = useState("")
  const [bookName,setBookName] = useState("");
  const [Description,setDescription] = useState("");
  const [pages,setPages]  = useState("");
  const [Publisher,setPublisher] = useState("")


  const[id,setId]=useState();
  const[data,getdata]=useState();
 const[present, setPresent]=useState([])
  


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



  const deleteBook=()=>{
    if(!id)
    {
      alert("invalid book id")
      return;
    } 

    // axios.delete(URL+`/api/v1/delete/${id}`)
    // .then((res)=>console.log("deleted succesfully"))
    // .catch((e)=> console.log("error is",e))
    // alert("book deleted successfully")

    console.log("Book is deleted successfully");
  
    
 
  }


  const searchBook=()=>{

  if(!data)
  {
    alert("Enter Valid Details");
    return;
  }
  console.log(data)
  axios.get(`${URL}/api/v1/get/${data}`)
  .then((e)=>{
    setPresent(e.data.data);
    console.log(present)
  })
  .catch((e)=> console.log("error is", e))

}

   
  
  



  return (
    <div className="Main">
      <h1 className="Heading">Your personalised Book Store!!!</h1>
      <div className="Container">

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
      
      <div className="Card">
      <input type="text" className="input-data" placeholder="search book by author or publisher name" onChange={(e)=>getdata(e.target.value)} ></input>
     
     <p>{present.length > 0 ? "The book Names are :-" : ""}</p>
      <p>{present ? present.map((e)=><p>{e.bookName}</p> ) : ""}</p>
    <button className="button-6" onClick={searchBook} >Search for a book</button><br />
      </div>
      <div className="Card">
      <input type="text" className="input-data" placeholder="enter book id " onChange={(e)=>{setId(e.target.value)}}></input>
      <button className="button-6" onClick={deleteBook}>Delete a book</button>
      </div>
      </div>
      
    </div>
  );
}

export default App;

import {useState , useEffect} from "react";
import './App.css';
import axios from 'axios';
import SocialCard from "./SocialCard";

function App() {

  const [users , setUsers] = useState([]);
  const [query , setQuery] = useState("");

   const filteredUsers = (users)=>{
    return users.filter((user)=> 
      (`${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(query)
      )
    )
   }

   useEffect(()=>{
    (async () => {
      let userData;
      try {
       const response =await axios.get("https://randomuser.me/api/?results=50")
      //  console.log(response); 
       userData = response.data.results;
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setUsers(userData);
    })(); 

   },[]);



  return (
    <div className="App">
      <h1>Social Cards</h1>
      <input type="text" name="search" className="search" value={query} placeholder="Search User..." onChange={(e)=>setQuery(e.target.value.toLowerCase())}/>

      <div className="card_container">   
          {filteredUsers(users).map((user ,index)=>(
            <SocialCard key={index} data = {user}/>
            ))}      
      </div>
    </div>
  );
}

export default App;

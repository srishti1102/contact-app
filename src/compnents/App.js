import React ,{useState}from "react";
import './App.css';
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import addContact from "./addContact";
import header from "./header";
function App() {
  const[contacts,setContacts]=useState([]);
  return (
     <div className="ui container">
      <header>

      </header>
      <addContact>

      </addContact>
      <ContactList contacts={contacts}>
       
      </ContactList> 
     </div>
  );
  
}

export default App;

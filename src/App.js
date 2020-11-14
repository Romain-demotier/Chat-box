import React, { useState } from 'react';
import './App.css';
import Formulaire from "./Component/Formulaire"
import Message from "./Component/Message"

function App (props) {

  const [messages, setmessages] = useState({})
  const [pseudo, setPseudo] = useState(props.match.params.pseudo)

console.log(pseudo)
  const addMessage = (message)=>{
    const msg= {...messages}
    msg[`message-${Date.now()}`] = message
    setmessages(msg)
  }
    return (
      <div className='box'>
        <div className="messages">
          <Message/>
          <Message/>
        </div>
        <Formulaire pseudo={pseudo} addMessage={addMessage}/>
      </div>
    );
  }


export default App

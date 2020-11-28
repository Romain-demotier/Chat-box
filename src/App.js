import React, { useState } from 'react';
import './App.css';
import Formulaire from "./Component/Formulaire"
import Message from "./Component/Message"

function App (props) {

  const [messages, setmessages] = useState({})
  const [pseudo, setPseudo] = useState(props.match.params.pseudo)
 

  const addMessage = (message)=>{
    const msg= {...messages}
    msg[`message-${Date.now()}`] = message
    setmessages(msg)
  }

  const leMessage = Object.keys(messages)
  .map(key => (
    <Message 
      key={key}
      message={messages[key].message}
      pseudo= {pseudo[key]}  />)
  )
 

    return (
      <div className='box'>
        <div className="messages">
          <Message/>
          <Message/>
        </div>
        <div className ="message">
          {leMessage}
        </div>
        <Formulaire length="150" pseudo={pseudo} addMessage={addMessage}/>
      </div>
    );
  }


export default App

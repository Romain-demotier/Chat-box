import React from 'react';
import './App.css';
import Formulaire from "./Component/Formulaire"
import Message from "./Component/Message"

function App () {
  
    return (
      <div className='box'>
        <div className="messages">
          <Message/>
          <Message/>
        </div>
        <Formulaire/>
      </div>
    );
  }


export default App

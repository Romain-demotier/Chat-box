
import React, {useState} from "react"

const Formulaire = (props) =>{ 
    
  const [text, settext] = useState("")

  const [length , setlength] = useState(props.length)

    const createMessage =()=>{
        const {addMessage , pseudo} = props
        const message = {
            pseudo,
            message : text,
        }
        addMessage(message)
        //reset
        settext("")
        setlength(props.length)
    }

    const handleChange = (event)=>{
        const message = event.target.value
        settext(message)
        const length = props.length - message.length
        setlength(length)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        createMessage()
        
    }
    
    const handleKeyUp = (event)=>{
       if(event.key === "Enter"){
           createMessage()
       }
    };
    
    return(
    <form onSubmit={handleSubmit} className = "form">
        <textarea onKeyUp={handleKeyUp} maxLength={props.length} value={text} onChange={handleChange} required/>
        <div className = "info"> {length} </div>
        <button type = "submit"> envoyer </button>
    </form>
    )
}

export default Formulaire
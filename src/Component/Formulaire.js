import React, {useState} from "react"

const Formulaire = (props) =>{ 
    
  const [text, settext] = useState("")

    const createMessage =()=>{
        const {addMessage , pseudo} = props
        const message = {
            pseudo,
            message : text
        }
        addMessage(message)
    }

    const handleChange = (event)=>{
        settext(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        createMessage()
        //empty text area
        settext("")
    }
    
    
    return(
    <form onSubmit={handleSubmit} className = "form">
        <textarea value={text} onChange={handleChange} required maxLength = "140"/>
        <div className = "info"> 140 </div>
        <button type = "submit"> envoyer </button>
    </form>
    )
}

export default Formulaire
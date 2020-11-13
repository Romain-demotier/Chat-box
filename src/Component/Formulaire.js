import React from "react"

const Formulaire = () =>{ 
    
    
    return(
    <form className = "form">
        <textarea required maxLength = "140"/>
        <div className = "info"> 140 </div>
        <button type = "submit"> envoyer </button>
    </form>
    )
}

export default Formulaire
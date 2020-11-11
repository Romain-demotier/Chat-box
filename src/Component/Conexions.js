import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Conexions() {
    
    const [pseudo, setpseudo] = useState("");
    const [acces, setacces] = useState(false);
    
    
    const handleChange = (event) =>{
        const psd = event.target.value
        setpseudo(psd)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setacces(true)
    }    
    
    let history = useHistory();            
    if (acces){ history.push(`/pseudo/${pseudo}`)};
            

                    return(
                        
                        <div className = "connexionBox">
        <form onSubmit= {handleSubmit} className = "connexion">
            <input  type = "text"
                    required
                    placeholder = "Pseudo"
                    onChange = {handleChange}
                    value = {pseudo}
                    >
            </input>
            <button type = "submit">Soumetre</button>
        </form>
    </div>
    );
}

export default Conexions;
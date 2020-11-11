import React from "react";

function Conexions () {

    return(
        
    <div className = "connexionBox">
        <form className = "connexion">
            <input  type = "text"
                    required
                    placeholder = "Pseudo">
            </input>
            <button type = "submit">Soumetre</button>
        </form>
    </div>
    );
}
export default Conexions;
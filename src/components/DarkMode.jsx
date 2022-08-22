import { useState } from "react";
import "./DarkMode.css";

function DarkMode({darkMode,setDarkMode}){

    const handleDarkMode=()=>{
        setDarkMode(!darkMode);
       
    }
    
    return(
        <div> 
            <button onClick={handleDarkMode} >dark mode</button>
        </div>
        
    );
}

export default DarkMode;
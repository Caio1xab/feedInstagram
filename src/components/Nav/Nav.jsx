import "./Nav.css";
import DarkMode from "../DarkMode";
import * as C from 'styled-components'

export default function Nav({darkMode,setDarkMode}){
    return(
        <div className="NavBar">
        <ul>
            <C.li>Teste</C.li>
            
            <li><a href="algo">News</a></li>
            <li><a href="algo">Contato</a></li>
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
        </ul>
        </div>
    );
};
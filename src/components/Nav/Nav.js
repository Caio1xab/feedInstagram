import "./Nav.css";
import {TbMoon} from 'react-icons/tb'

export default function Nav(){
    return(
        <div className="NavBar">
        <ul>
            <li><a href="algo">Página Inicial</a></li>
            <li><a href="algo">News</a></li>
            <li><a href="algo">Contato</a></li>
            <button id="darkMode"> <TbMoon /> </button>
        </ul>
        </div>
    );
};
import "./Nav.css";
import DarkMode from "../DarkMode";

export default function Nav(){
    return(
        <div className="NavBar">
        <ul>
            <li><a href="algo">Página Inicial</a></li>
            <li><a href="algo">News</a></li>
            <li><a href="algo">Contato</a></li>
            <DarkMode />
        </ul>
        </div>
    );
};
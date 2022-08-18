import './Post.css'
import { useState } from 'react';
import { FaHeart, FaRegComment, FaShare } from "react-icons/fa";

export default function Post(){

    const [curtir,setCurtir]=useState(false);
    const [comentar,setComentar]=useState(false);
    const [compartilhar, setCompartilhar]=useState(false);

    function curtirAcao(){
        setCurtir(!curtir);
    }

    function comentarAcao(){
        setComentar(!comentar)
    }

    function compartilharAcao(){
        setCompartilhar(!compartilhar)
    }




    return(
        <div className="card">
            <div className="header--card">
                <img className="img-1" src="https://img.a.transfermarkt.technology/portrait/big/3758-1544180873.jpg?lm=1" />
                <div className="header-Name"> <h2>Caio Ribeiro <br/><span>CaioRibeiro.@</span></h2> </div>
            </div>
            <img className="img--post" src='https://www.estrelando.com.br/uploads/2021/09/06/caio-ribeiro-1630944317.jpg'/>
            <div className="interacao">
                <button onClick={curtirAcao}>Curtir <FaHeart id="faHeart" style={{color:curtir?"red":"grey"}} /></button>
                <button onClick={comentarAcao}>Comentar <FaRegComment id="faComment" style={{color:comentar?"red":"grey"}}/> </button>
                <button onClick={compartilharAcao}>Compartilhar <FaShare id="faShare" style={{color:compartilhar?"red":"grey"}}/> </button>
            </div>
        </div>
    )
}

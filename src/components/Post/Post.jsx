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
                <img className="img-1" src="https://cdn.iconscout.com/icon/free/png-256/person-1780868-1514183.png" />
                <div className="header-Name"> <h2>Caio Italo <br/><span>Caioxab.exe</span></h2> </div>
                <img className="dots" src="https://cdn-icons-png.flaticon.com/128/61/61140.png"/>
            </div>
            <img className="img--post" src='http://www.nelsonkon.com.br/wp-content/uploads/2019/11/cubatao_xecutm_01_ipsis.jpg'/>
            <div className="interacao">
                <div className='profileComment'>
                <img className="img-1-bottom" src="https://cdn.iconscout.com/icon/free/png-256/person-1780868-1514183.png"/>
                
                <h5>Caioxab.exe       <span>  Praesent sit amet tellus sapien. Aenean posuere felis vehicula, tincidunt dui vitae.</span></h5> </div>

                <button onClick={curtirAcao}>Curtir <FaHeart id="faHeart" style={{color:curtir?"red":"grey"}} /></button>
                <button onClick={comentarAcao}>Comentar <FaRegComment id="faComment" style={{color:comentar?"red":"grey"}}/> </button>
                <button onClick={compartilharAcao}>Compartilhar <FaShare id="faShare" style={{color:compartilhar?"red":"grey"}}/> </button>
            </div>
        </div>
    )
}

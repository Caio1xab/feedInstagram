import './Post.css'
export default function Post(){
    return(
        <div className="card">
            <div className="header--card">
                <img className="img-1" src="https://img.a.transfermarkt.technology/portrait/big/3758-1544180873.jpg?lm=1" />
                <div className="header-Name"> <h2>Caio Ribeiro <br/><span>CaioRibeiro.@</span></h2> </div>
            </div>
            <img className="img--post" src='https://www.estrelando.com.br/uploads/2021/09/06/caio-ribeiro-1630944317.jpg'/>
            <div className="interacao">
                <button>Curtir</button>
                <button>Comentar</button>
                <button>Compartilhar</button>
            </div>



        </div>
    )
}

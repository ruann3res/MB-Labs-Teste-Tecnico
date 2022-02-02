import React from 'react';
import '../styles/components/Events.css'



export default () => {
    return (
        <section className="eventos" id="eventos">

        <h1 className="titulos">EVENTOS</h1>

        <div className="box-container">
            <div className="box">
                <img src="https://images.sympla.com.br/6022943ca97b4-xs.png" alt="s"/>
                <div className="content">
                    <h3> Curso Node, React, MongoDB </h3>
                    <p>Online/Remoto</p>

                    <div className="price"> R$ 59,99 <span> OU 12x R$ 6,20 </span> </div>
                    <a href="https://www.sympla.com.br/curso-react--node-js--mongo-db--react-native__1101170" className="btn">Comprar Ingressos</a>
                </div>
            </div>

            <div className="box">
                <img src="https://assets.bileto.sympla.com.br/eventmanager/production/22v0qhgau2n0f8jb0ecfh6vqjb7m2d28majeoc99lt01gdf8gk3t158pdfmvj9sb32oqb52nhtejkhgt1ins61urq9kom5r1ki18r7i.webp" alt=""/>
                <div className="content">
                <h3>   THIAGO VENTURA em Modo Efetivo - Tatuapé </h3>
                    <p>Teatro Fernando Torres - Rua Padre Estevão Pernet, 588, São Paulo - São Paulo </p>

                    <div className="price"> Ingressos entre R$ 40,00 e R$ 80,00 <span>Pague em até 12x</span> </div>
                    <a href="https://bileto.sympla.com.br/event/69490/d/123961/s/757358" className="btn">Comprar Ingressos</a>
                </div>
            </div>

            <div className="box">
                <img src="https://i.ibb.co/jwbPwQz/61844de159b67-xs.png" alt=""/>
                <div className="content">
                    <h3>Carnaval do Mirante 2022 </h3>
                    <p>Evento presencial em Mirante Beagá, Belo Horizonte - MG</p>
                    <div className="price"> Preços variados entre R$100 ate R$ 300,00 </div>
                    <a href="https://bileto.sympla.com.br/event/68203/d/114926" className="btn">Comprar Ingressos</a>
                    </div>
            </div>

            <div className="box">
                <img src="https://i.ibb.co/bFGmyhW/61dd896594e72.png"/>
                <div className="content">
                    <h3> naSala de Verão! </h3>
                    <p>Evento presencial em Mirante Beagá, Belo Horizonte - MG</p>
                    <div className="price"> R$ 170,00 (+ R$ 17,00 taxa) <span>em até 3x R$ 66,73</span> </div>
                    <a href="https://www.sympla.com.br/maratona-da-comunicacao-eficaz__1166922" className="btn">Comprar Ingressos</a>
                </div>
            </div>

            <div className="box">
                <img src="https://images.sympla.com.br/6011a9b3d88bf-xs.png" alt=""/>
                <div className="content">
                    <h3>[Lançamento] Livro ilustrado Fundamentos de UI Design </h3>
                    <p>Evento online via Youtube</p>
                    <div className="price"> R$ 0.00 <span> </span> </div>
                    <a href="https://www.sympla.com.br/39-edd---encontro-de-direito-digital__1183532" className="btn">Comprar Ingressos</a>
                </div>
            </div>

            <div className="box">
                <img src="https://images.sympla.com.br/61e2057858fb2-xs.jpg" alt=""/>
                <div className="content">
                    <h3> Curso preparatório para concurso UFU LÍNGUA PORTUGUESA </h3>
                    <p>Evento online (Videoconferência via Sympla Streaming)</p>
                    <div className="price">R$ 199,00 <span>em até 12x R$ 20,58</span> </div> 

                    <a href="https://www.sympla.com.br/curso-preparatorio-para-concurso-ufu-lingua-portuguesa__1461606" className="btn">Comprar Ingressos</a>
                </div>
            </div>

        </div>

    </section>


    )
}
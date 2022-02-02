import React from 'react';
import '../styles/components/Footer.css';

export default () => {
    return (
            <section className="footer">

                <div className="container">
            
                    <div className="item">
                        <h3>Sobre</h3>
                        <p>Site de compra e gestão de eventos presenciais ou online de empresas e instituições acadẽmicas.</p>
                    </div>
                    <div className="item">
                        <h3>Localização</h3>
                        <a href="#">Brasil</a>
            
                    </div>
                    <div className="item">
                        <h3>Menu</h3>
                        <a href="#home">Home</a>
                        <a href="#eventos">Eventos</a>
                        <a href="#categorias">Categorias</a>
                    </div>
                    <div className="item">
                        <h3>Siga-nos</h3>
                        <a href="https://www.instagram.com/ruan_074/" target='_blank' rel="noreferrer" >Instagram</a>
                        <a href="https://github.com/ruann3res" target='_blank' rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/ruan-neres/" target='_blank' rel="noreferrer" > Linkedin </a>
                    </div>
            
                </div>
            
                <h1 className="credit"> Criado por Ruan Neres </h1>
        
        </section> 
    )
}
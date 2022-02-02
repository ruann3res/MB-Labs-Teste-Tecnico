import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import '../styles/components/Header.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const {register, handleSubmit} = useForm()
    const addPost = data => console.log(data)
    useEffect(() => {
        let searchBtn = document.querySelector('#search-btn');
        let searchBar = document.querySelector('.search-bar-container');
        let formBtn = document.querySelector('#login-btn');
        let formClose = document.querySelector('#form-close');
        let menu = document.querySelector('#menu-bar');
        let navbar = document.querySelector('.navbar');
        let loginForm = document.querySelector('.login-form-container');
        let loginFormSubmitBtn = document.querySelector("#login-form-submit-button");
        let loginFormCloseButton = document.querySelector("#form-close");


        document.addEventListener("scroll", () => {
            searchBtn.classList.remove('fa-times');
            searchBar.classList.remove('active');  
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        });

        menu.addEventListener('click', () =>{
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });

        searchBtn.addEventListener('click', () =>{
            searchBtn.classList.toggle('fa-times');
            searchBar.classList.toggle('active');
        });

        formBtn.addEventListener('click', () =>{
            let tempoParaAparecer = 0;
            if(window.scrollY !== 0){
                window.scrollTo(0, 0);
                tempoParaAparecer = 3;
            }
            setTimeout(() => {
            loginForm.classList.add('active');
            }, tempoParaAparecer);
        });
        
        formClose.addEventListener('click', () =>{
            loginForm.classList.remove('active');
        });

        loginFormSubmitBtn.addEventListener("click", () => {
            loginForm.classList.remove("active");
        });

        loginFormCloseButton.addEventListener("click", () => {
            loginForm.classList.remove("active");
        })
        
       
        

    }, []);
    return (
        <>
            <header>
                <div id="menu-bar" class="fas fa-bars"></div>

                <div className="logo">ticket.com</div>

                    <nav className="navbar">
                        <a href="#home">Home</a>
                        <a href="#categorias">Categorias</a>
                        <a href="#eventos">Eventos</a>
                        <a href="#newEvent">Novos Eventos</a>
                    </nav>

                    <div className="icons">
                        <i className="fas fa-search" id="search-btn"></i>
                        <i className="fas fa-user" id="login-btn"></i>
                    </div>

                    <form className="search-bar-container">
                        <input type="search" id="search-bar" placeholder="pesquise aqui..."/>
                        <label for="search-bar" className="fas fa-search"></label>
                    </form>
            </header>
            <div class="login-form-container">
                <i class="fas fa-times" id="form-close"></i>
                <form onSubmit={handleSubmit(addPost)}>
                    <h3>login</h3>
                    <input type="email" className="item" placeholder="seu email" {...register("UserMail")} />
                    <input type="password" className="item" placeholder="sua senha" {...register("password")} />
                    <button type="submit"  className="btn" id="login-form-submit-button">entre agora</button>
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember-me</label>
                    <p>Forget your password? <a href="#"> Click Here</a></p>
                    <p>Don't have an account? <a href="#"> Signup now</a></p>
                </form>
            </div>
        </>
    )
}
import React from 'react';
import './styles/App.css';
import  Header from './components/Header'
import Home from './components/Home'
import Categorias from './components/Categories'
import Eventos from './components/Events'
import Footer from './components/Footer'
import NewEvents from './components/NewEvent/newEvent'

export default () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Categorias/>
      <Eventos/>
      <NewEvents/>
      <Footer/>
    </div>
  )
}
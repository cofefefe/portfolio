import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo_nav.PNG'
import {useNavigate} from 'react-router-dom';



function Nav() {

    const navigate = useNavigate()

    function disconnectUser(){
        localStorage.removeItem('token')
        navigate('/')
    }

    function navigateToMenu(){
        navigate('/')
    }

    function navigateToMainPage(){
        navigate('/homepage')
    }
    
    if(localStorage.getItem('token')){
        return(
            <nav className="nav container-fluid d-flex justify-content-between">
                    <div className="nav__left d-flex">
                        <img className="nav__logo" src={logo} alt="logo de Mathieu Baugard" onClick={navigateToMainPage}/>
                        <p className="nav__name">Mathieu<br/>Baugard</p>
                    </div>
                    <div className="nav__right d-flex">
                            <button download className="nav__button" >Télécharger CV</button>
                        <button className="nav__button" onClick={disconnectUser} >Déconnexion</button>
                    </div>
            </nav>
        )
    }
    if(!localStorage.getItem('token')){
        return(
            <nav className="nav container-fluid d-flex justify-content-between">
                    <div className="nav__left d-flex">
                        <img className="nav__logo" src={logo} alt="logo de Mathieu Baugard" onClick={navigateToMainPage}/>
                        <p className="nav__name">Mathieu<br/>Baugard</p>
                    </div>
                    <div className="nav__right d-flex">
                        <a href="/cv.png" download className="nav__button" >Télécharger CV</a>
                        <button className="nav__button" onClick={navigateToMenu}>Accueil</button>
                    </div>
            </nav>
        )
    }
}

export default Nav;
import React from 'react';

import './style.css';
import logoImg from '../../assets/logo.svg';
import LogIn from '../../assets/log-in.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        <img src={LogIn} ig="LogInIcon" alt="Login Icon" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}

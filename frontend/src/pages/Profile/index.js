import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import PowerIcon from '../../assets/power.svg';
import './style.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img id="logoImg" src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, APAD</span>
                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button type="button">
                    <img src={PowerIcon} ig="PowerIcon" alt="Power Icon" />
                </button>
            </header>
        </div>
    )
}

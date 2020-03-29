import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import PowerIcon from '../../assets/power.svg';
import TrashIcon from '../../assets/trash-2.svg';
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
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <img src={TrashIcon} ig="TrashIcon" alt="Trash Icon" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <img src={TrashIcon} ig="TrashIcon" alt="Trash Icon" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <img src={TrashIcon} ig="TrashIcon" alt="Trash Icon" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <img src={TrashIcon} ig="TrashIcon" alt="Trash Icon" />
                    </button>
                </li>
            </ul>
        </div>
    )
}

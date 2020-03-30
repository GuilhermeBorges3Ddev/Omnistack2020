import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import PowerIcon from '../../assets/power.svg';
import TrashIcon from '../../assets/trash-2.svg';
import './style.css';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try{
          await api.delete(`incidents/${id}`,{
              headers: {
                  Authorization: ongId
              }
          });
          setIncidents(incidents.filter(incidents => incidents.id !== id));
        } catch(err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img id="logoImg" src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button type="button">
                    <img src={PowerIcon} ig="PowerIcon" alt="Power Icon" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
               {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>
                        <strong>VALOR:</strong>
                        <p>
                            {Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL'
                            }).format(incident.value)}
                        </p>
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <img src={TrashIcon} ig="TrashIcon" alt="Trash Icon" />
                        </button>
                    </li>
               ))}
            </ul>
        </div>
    )
}

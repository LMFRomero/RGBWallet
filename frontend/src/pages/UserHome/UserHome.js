import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

import Header from '../../components/Header/Header';

export default function UserHome() {
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);

    const history= useHistory();

    useEffect(async () => {
        try {
            const response = await api.get('/user', {
                params: {
                    username
                }
            });

            setUsername(response.data.username);
            setName(response.data.name);
            setBalance(parseFloat(response.data.balance).toFixed(2));
        } catch (err) {
            alert('Usuario nao encontrado');
            history.push('/');
        }
        
    }, [username]);

    return (
        <div className="UserInterface">
            <Header />
            
            <section className="home">
                <div className="home-div">

                    <div className="user">
                        <h1>{name}</h1>
                        <h2>{username}</h2>  
                    </div>
                    
                    <h3 className="saldo-container">
                        <div className="saldo">{`R$ ${balance}`}</div> 
                    </h3>
                    
                </div>
            </section>
        </div>
    );
}
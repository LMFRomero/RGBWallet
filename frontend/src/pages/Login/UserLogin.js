import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';

import api from '../../services/api';

import './styles.css';

export default function UserLogin () {
    const [username, setUsername] = useState("");
    const history = useHistory();

    async function handleUserLogin(e) {
        e.preventDefault();

        try {
            await api.get('/user', { params: {
                username
            }});

            localStorage.setItem('username', username);

            history.push('/userHome');
        } catch (err) {
            alert('Usuario nao encontrado');
        }
    }

    return (
        <div>
            <Header />
            <div className="login-container">
                <form onSubmit={handleUserLogin}>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="Username" placeholder="Nome de Usuário" value={username} onChange={ (e) => setUsername(e.target.value) }/>
                        <label for="floatingInput">Nome de Usuário</label>
                    </div>
                    <button className="login-button" type="submit">ENTRAR</button>
                </form> 
            </div>
        </div>
    );
} 
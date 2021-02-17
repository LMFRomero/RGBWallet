import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header/Header';

import './styles.css';

export default function AdmLogin () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    async function handleLogin (e) {
        e.preventDefault();
        
        try {
            await api.post('/login', { username, password }, { withCredentials: true });
            
            history.push('/admHome');
        } catch (err) {
            console.log('Login Invalido');
        }
    }

    return (
        <div id="admin-login">
            <Header />

            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="Username" placeholder="Nome de Usuário" value={username} onChange={ (e) => {setUsername(e.target.value)} } />
                        <label for="floatingInput">Nome de Usuário</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="Password" placeholder="Senha" value={password} onChange={ (e) => {setPassword(e.target.value)} } />
                        <label for="floatingInput">Senha</label>
                    </div>
                    <button type="submit" className="login-button">ENTRAR</button>
                </form>
            </div>
        </div>

    );
} 
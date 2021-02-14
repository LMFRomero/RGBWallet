import React from 'react';

import Header from '../../components/Header/Header';

import './styles.css';

export default function AdmLogin () {
    return (
        <div id="admin-login">
            <Header />

            <div className="login-container">
                <form>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="Username" placeholder="Nome de Usuário" />
                        <label for="floatingInput">Nome de Usuário</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="Password" placeholder="Senha" />
                        <label for="floatingInput">Senha</label>
                    </div>
                    <button type="submit" className="login-button">ENTRAR</button>
                </form> 
            </div>
        </div>

    );
} 
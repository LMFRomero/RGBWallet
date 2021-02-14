import React from 'react';

import Header from '../../components/Header/Header';

import './styles.css';

export default function UserLogin () {
    return (
        <div>
            <Header />
            <div className="login-container">
                <form>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="Username" placeholder="Nome de Usuário" />
                        <label for="floatingInput">Nome de Usuário</label>
                    </div>
                    <button className="login-button" type="submit">ENTRAR</button>
                </form> 
            </div>
        </div>
    );
} 
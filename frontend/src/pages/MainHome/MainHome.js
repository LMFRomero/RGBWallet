import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header/Header';

export default function MainHome(){
    return (
        <div className="logon-container">
            <Header />
            
            <div className="userlog">
                <Link to="/admLogin">
                    <button className="button">ENTRAR COMO ADMNISTRADOR</button>
                </Link>
                
                <Link to="/userLogin">
                    <button className="button">ENTRAR COMO USUÁRIO</button>
                </Link>
            </div>
            
        </div>
    );
}
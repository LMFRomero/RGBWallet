import React from 'react';

import './styles.css';

import Header from '../../components/Header/Header';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';

export default function MainHome(){
    return (
        <div className="logon-container">
            <Header />
            
            <userlog>

                <button className="button">ENTRAR COMO ADMNISTRADOR</button>
                
                <button className="button">ENTRAR COMO USUÁRIO</button>
            
            </userlog>
        </div>
    );
}
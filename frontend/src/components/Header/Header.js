import React from 'react';

import './styles.css';
import logoImg from '../../assets/logo-header.svg'

export default function Header() {
    return (
        <div className="header-container">
            <img src={logoImg} alt="ICMC-Jr" className="logo-img"/>
            <h1 className='title'>
                <span className="red">R</span>
                <span className="green">G</span>
                <span className="blue">B</span>
                <span className="yellow">Wallet</span>
            </h1>
        </div>
    );
}
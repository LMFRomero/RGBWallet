import React from 'react';

import './styles.css';

import Header from '../../components/Header/Header';

export default function UserHome() {
    return (
        <div className="UserInterface">
            <Header />
            
            <section className="home">
                <home>

                    <user>
                      <h1>NOME COMPLETO</h1>
                      <h2>NOME USUARIO</h2>  
                    </user>
                    
                    <h3 className="saldo-container">
                        <saldo>R$ XXX,XX</saldo>
                    </h3>
                    
                </home>
            </section>
        </div>
    );
}
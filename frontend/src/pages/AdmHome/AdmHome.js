import React, { useState, useEffect } from 'react';

import 'bootstrap/js/src/collapse'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from '../../components/Header/Header';
import UserForm from '../../components/UserInfoForm/UserInfoForm';
import UserItem from '../../components/UserOverviewItem/UserOverviewItem';

export default function AdmHome() {
    let items = [
        {name: "Lucas de Medeiros Franca Romero", username: "lromero1", weeksDone:"2", balance: "100", hasSold: true, isInProject: false},
        {name: "Lucas de Medeiros Franca Romero", username: "lromero2", weeksDone:"2", balance: "100", hasSold: true, isInProject: false},
        {name: "Lucas de Medeiros Franca Romero", username: "lromero3", weeksDone:"2", balance: "100", hasSold: true, isInProject: false},
        {name: "Lucas de Medeiros Franca Romero", username: "lromero4", weeksDone:"2", balance: "100", hasSold: true, isInProject: false},
        {name: "Lucas de Medeiros Franca Romero", username: "lromero5", weeksDone:"2", balance: "100", hasSold: true, isInProject: false},
        {name: "Lucas de Medeiros Franca Romero", username: "lromero6", weeksDone:"2", balance: "100", hasSold: true, isInProject: false},
        {name: "Lucas de Medeiros Franca Romero", username: "lromero7", weeksDone:"2", balance: "100", hasSold: true, isInProject: false},
    ];
    return (
        <div>
            <Header />
            <div className="container main-buttons">
                <div className="row justify-content-evenly">
                    <div className="col-4">
                        <button id="create-new-user-main-button" type="button" className="btn adm-main-button" data-bs-toggle="collapse" data-bs-target="#create-user" aria-expanded="false" aria-controls="create-user">
                            CRIAR NOVO USUARIO
                        </button>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn adm-main-button">
                            ADICIONAR SALDO A TODOS OS USUARIOS
                        </button>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn adm-main-button">
                            ZERAR SALDO DE TODOS OS USUARIOS
                        </button>
                    </div>
                    <div id="create-user" className="collapse">
                        <UserForm type="create" />
                    </div>    
                </div>
            </div>
            <div className="user-overview-list">
                {items.map( 
                    (item, index) => (
                        <UserItem key={items[index].name} info={items[index]}/>
                    )
                ) }
            </div>
        </div>
    );
}
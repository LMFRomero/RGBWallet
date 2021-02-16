import React, { useState, useEffect } from 'react';

import 'bootstrap/js/src/collapse'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import UserForm from '../UserInfoForm/UserInfoForm';

export default function UserOverviewItem (props) {
    let name = props.info.name;
    let balance = props.info.balance;
    
    balance = parseFloat(balance).toFixed(2); 

    return (
        <div className="row container overview-container">
            <div className="col-5">
                <div id="Name" className="overflow-auto overview-item">
                    {name}
                </div>
            </div>
            <div className="col-3">
                <div id="Balance" className="overview-item">
                    R${balance}
                </div>
            </div>
            <div className="col-2 centered-button">
                <button type="button" className="btn overview-button" data-bs-toggle="collapse" data-bs-target={`#edit-user-${props.info.username}`} aria-expanded="false" aria-controls={`edit-user-${props.info.username}`}>EDITAR</button>
            </div>            
            <div className="col-2 centered-button">
                <button type="button" className="btn overview-button">DELETAR</button>
            </div>
            <div id={`edit-user-${props.info.username}`} className="collapse">
                <div className="mt-3">
                    <UserForm type="edit" info={props.info} />              
                </div>
            </div>
        </div>

    );
}
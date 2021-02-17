import React from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/js/src/collapse'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import UserForm from '../UserInfoForm/UserInfoForm';

import api from '../../services/api';

export default function UserOverviewItem (props) {
    let name = props.info.name;
    let balance = props.info.balance;

    const history = useHistory();
    
    balance = parseFloat(balance).toFixed(2);

    async function handleDelete (id) {
        try {
            await api.delete(`/admin/user/${id}`, {}, { withCredentials: true });
            
            history.go(0);
        } catch (err) {
            alert('Erro ao deletar usuario');
            console.log(err);
        }
    }

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
                <button type="button" className="btn overview-button" data-bs-toggle="collapse" data-bs-target={`#edit-user-${props.info._id}`} aria-expanded="false" aria-controls={`edit-user-${props.info.username}`}>EDITAR</button>
            </div>            
            <div className="col-2 centered-button" onClick={() => { handleDelete(props.info._id) } }>
                <button type="button" className="btn overview-button">DELETAR</button>
            </div>
            <div id={`edit-user-${props.info._id}`} className="collapse">
                <div className="mt-3">
                    <UserForm type="edit" info={props.info} />              
                </div>
            </div>
        </div>

    );
}
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/js/src/collapse'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from '../../components/Header/Header';
import UserForm from '../../components/UserInfoForm/UserInfoForm';
import UserItem from '../../components/UserOverviewItem/UserOverviewItem';

import api from '../../services/api';

export default function AdmHome() {
    const [items, setItems] = useState([]);
    // const [trigger, setTrigger] = useState(false);

    const history = useHistory();

    useEffect(async () => {
        const response = await api.get('/admin/user', {}, { withCredentials: true });
        
        setItems(response.data);
    }, []);

    async function handleAddAmount () {
        try {
            await api.post('/admin/addAmount', {}, { withCredentials: true });

            history.go(0);
        } catch (err) {
            alert('Erro ao adicionar saldo');

            console.log(err);
        }
    }

    async function handleResetAmount () {
        try {
            await api.post('/admin/resetBalance', {}, { withCredentials: true });

            history.go(0);
        } catch (err) {
            alert('Erro ao zerar saldo');

            console.log(err);
        }
    }

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
                        <button type="button" className="btn adm-main-button" onClick={handleAddAmount} >
                            ADICIONAR SALDO A TODOS OS USUARIOS
                        </button>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn adm-main-button" onClick={handleResetAmount} >
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
                        <UserItem key={items[index]._id} info={items[index]}/>
                    )
                ) }
            </div>
        </div>
    );
}
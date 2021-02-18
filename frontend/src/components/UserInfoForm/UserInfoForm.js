import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import api from '../../services/api';

export default function UserInfoForm(props) {
    const [buttonText, setButtonText] = useState("CRIAR");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [isInProject, setIsInProject] = useState(false);
    const [hasSold, setHasSold] = useState(false);
    const [weeksDone, setWeeksDone] = useState("");

    useEffect(() => {
        if (props.type === "edit") {
            setButtonText("EDITAR");
            setName(props.info.name);
            setUsername(props.info.username);   
            setIsInProject(props.info.isInProject);
            setHasSold(props.info.hasSold);
            setWeeksDone(props.info.weeksDone);
        }
    }, []);

    async function handleSubmit (e) {
        if (props.type === "create") {
            try {
                const response = await api.post('/admin/user', {
                    name,
                    username,
                    isInProject,
                    hasSold,
                    weeksDone
                }, { withCredentials: true });

                console.log(response);
            } catch (err) {
                alert('Erro ao criar usuario')
                console.log(err);
            }
        }
        else if (props.type === "edit") {
            try {
                const response = await api.put(`/admin/user/${props.info._id}`, {
                    name,
                    username,
                    isInProject,
                    hasSold,
                    weeksDone
                }, { withCredentials: true });

                console.log(response);
            } catch (err) {
                alert('Erro ao editar usuario');
                console.log(err);
            }
        }
    }
    
    return (
        <div className="container"> 
            <form onSubmit={handleSubmit}>
                <div className="form-floating" required>
                    <input type="text" className="form-control" id="Name" placeholder="Nome Completo" value={name} onChange={e => setName(e.target.value)} />
                    <label for="floatingInput">Nome Completo</label>
                </div>

                <div className="form-floating" required>
                    <input type="text" className="form-control" id="Username" placeholder="Nome de Usuario" value={username} onChange={e => setUsername(e.target.value)} />
                    <label for="floatingInput">Nome de Usuário</label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={isInProject} id="IsInProject" onChange={e => setIsInProject(e.target.checked)} />
                    <label className="form-check-label" for="IsInProject">Está executando projeto?</label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={hasSold} id="HasSold" onChange={e => setHasSold(e.target.checked)} />
                    <label className="form-check-label" for="HasSold">Vendeu algum projeto?</label>
                </div>

                <select required className="form-select weeks-select" aria-label="WeeksDone" onChange={e => setWeeksDone(e.target.value)} value={weeksDone} >
                    <option disabled value="">Número de semanas cumpridas</option>
                    <option value="0">0 semanas</option>
                    <option value="1">1 semana</option>
                    <option value="2">2 semanas</option>
                    <option value="3">3 semanas</option>
                    <option value="4">4 semanas</option>
                    <option value="5">5 semanas</option>
                </select>
                <div className="el-gambiarra">
                    <button type="submit" className="user-info-button btn">{buttonText}</button>
                </div>
            </form>
        </div>
    );
}
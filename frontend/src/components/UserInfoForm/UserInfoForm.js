import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function UserInfoForm(props) {
    const [buttonText, setButtonText] = useState("CRIAR");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [isInProject, setIsInProject] = useState(false);
    const [hasSold, setHasSold] = useState(false);

    useEffect(() => {
        if (props.type === "edit") {
            setButtonText("EDITAR");
            setName(props.name);
            setUsername(props.username);   
            setIsInProject(props.isInProject);
            setHasSold(props.hasSold);
        }
    }, []);

    return (
        <div className="container"> 
            <form>
                <div class="form-floating">
                    <input type="text" class="form-control" id="Name" placeholder="Nome Completo" value={name} onChange={e => setName(e.target.value)} />
                    <label for="floatingInput">Nome Completo</label>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" id="Username" placeholder="Nome de Usuario" value={username} onChange={e => setUsername(e.target.value)} />
                    <label for="floatingInput">Nome de Usuário</label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" checked={isInProject} id="IsInProject" onChange={e => setIsInProject(e.target.checked)} />
                    <label class="form-check-label" for="IsInProject">Está executando projeto?</label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" checked={hasSold} id="HasSold" onChange={e => setHasSold(e.target.checked)} />
                    <label class="form-check-label" for="HasSold">Vendeu algum projeto?</label>
                </div>

                <select required class="form-select" aria-label="WeeksDone" onChange={e => console.log(e.target.value)} >
                    <option selected disabled value="">Número de semanas cumpridas</option>
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
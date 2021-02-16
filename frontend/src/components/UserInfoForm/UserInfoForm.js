import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function UserInfoForm(props) {
    const [buttonText, setButtonText] = useState("CRIAR");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [isInProject, setIsInProject] = useState(false);
    const [hasSold, setHasSold] = useState(false);
    let selectOptions = [false, false, false, false, false];
    let noOption = true;

    useEffect(() => {
        if (props.type === "edit") {
            setButtonText("EDITAR");
            setName(props.info.name);
            setUsername(props.info.username);   
            setIsInProject(props.info.isInProject);
            setHasSold(props.info.hasSold);
        }
    }, []);
    
    if (props.type === "edit") {
        selectOptions[props.info.weeksDone] = true;
        noOption = false;
    }
    
    return (
        <div className="container"> 
            <form>
                <div className="form-floating">
                    <input type="text" className="form-control" id="Name" placeholder="Nome Completo" value={name} onChange={e => setName(e.target.value)} />
                    <label for="floatingInput">Nome Completo</label>
                </div>

                <div className="form-floating">
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

                <select required className="form-select weeks-select" aria-label="WeeksDone" onChange={e => console.log(e.target.value)} >
                    <option selected={noOption} disabled value="">Número de semanas cumpridas</option>
                    <option selected={selectOptions[0]} value="0">0 semanas</option>
                    <option selected={selectOptions[1]} value="1">1 semana</option>
                    <option selected={selectOptions[2]} value="2">2 semanas</option>
                    <option selected={selectOptions[3]} value="3">3 semanas</option>
                    <option selected={selectOptions[4]} value="4">4 semanas</option>
                    <option selected={selectOptions[5]} value="5">5 semanas</option>
                </select>
                <div className="el-gambiarra">
                    <button type="submit" className="user-info-button btn">{buttonText}</button>
                </div>
            </form>
        </div>
    );
}
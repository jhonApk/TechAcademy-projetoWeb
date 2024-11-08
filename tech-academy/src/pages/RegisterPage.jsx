import React from "react";
import "../Style/css/loginRegistro.css";
import logo from "../LoginAssets/logo.png";
import { Link } from "react-router-dom";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import Axios from 'axios';
import {useState} from 'react';



const Registro = () =>{
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    //const [confirmPassword, setConfirmPassword] = useState('')

    //onClick
    const createUser = ()=>{
        //criar api para conectar no servidor
        Axios.post('http://localhost:3002/registro', {
            Email: email,
            UserName: userName,
            Password: password,
            //ConfirmPassword: confirmPassword,
        }).then(() => {
            console.log("User Criado!")
        })
    }

    return(
        <div className="registroPage flex">
        <div className="container flex">
          <div className="videoDiv">
                    <div className="textDiv">
                        <h2 className="title">Tech Academy</h2>
                        <p>Construindo seu futuro </p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Você já é Aluno?</span>
                        <Link to={"/login"}> 
                            <button className="btn flex">Login</button>
                        </Link>
                    </div>
            </div>
            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Seja Bem-Vindo</h3>
                </div>

                <form action="" className="form grid">
                
                    <div className="inputDiv">
                        <label htmlFor="email">E-mail</label>
                        <div className="input flex">
                            <MdMarkEmailRead className='icon'/>
                            <input type="email" id="email" placeholder="Enter E-mail" onChange={(event)=>{
                                setEmail(event.target.value)
                            }}/>
                        </div>
                    </div>
                    
                    <div className="inputDiv">
                        <label htmlFor="userName">Username</label>
                        <div className="input flex">
                            <MdMarkEmailRead className='icon'/>
                            <input type="text" id="userName" placeholder="Enter Username" onChange={(event)=>{
                                setUserName(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="password" id="password" placeholder="Enter Password" onChange={(event)=>{
                                setPassword(event.target.value)
                            }} />
                        </div> 
                    </div>

                    <button type="submit" className="btn flex" onClick={createUser}>
                        <span>Registro</span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>
                    
    
                </form>
            </div>


        </div>
        </div>
    )
}

export default Registro
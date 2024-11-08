import React from "react";
import "../Style/css/loginRegistro.css";
import logo from "../LoginAssets/logo.png"
import { Link} from "react-router-dom";
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { useState } from "react";
import { Axios } from "axios";



const Login = () =>{

    const [loginUserName, setloginUserName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')


    //onClick
    const loginUser = ()=>{
        //e.preventDefault();
        //criar api para conectar no servidor
        Axios.post('http://localhost:3002/login', { 
            LoginUserName: loginUserName,
            LoginPassword: loginPassword
            //ConfirmPassword: confirmPassword,
        }).then((response) => {
            console.log(response.data.message)

            /*if(LoginUserName == " " || LoginPassword == ""){
                
            }*/
        })
    }
    
    return(
        <div className="loginPage flex">
        <div className="container flex">
          <div className="videoDiv">
                    <div className="textDiv">
                        <h2 className="title">Tech Academy</h2>
                        <p>Construindo seu Futuro</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Ainda não é Aluno?</span>
                        <Link to={"/Registro"}> 
                            <button className="btn flex">Cadastre-se</button>
                        </Link>
                    </div>
            </div>
            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Seja Bem-Vindo</h3>
                </div>

                <form action="" className="form grid">
                    {/*<span className="showMessage">Login Status will</span>*/}
                    <div className="inputDiv">
                        <label htmlFor="usuario">Usuário</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id="username" placeholder="Enter Username" onChange={(event) => {
                                setloginUserName(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="password" id="password" placeholder="Enter Password" onChange={(event) => {
                                setLoginPassword(event.target.value)
                            }}/>
                        </div> 
                    </div>

                    <button type="submit" className="btn flex" onClick={loginUser}>
                        <span>Login</span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>
                    
                    <span className="recuperarSenha">
                        Equeceu a Senha? <a href="">Clique aqui</a>
                    </span>
                </form>
            </div>


        </div>
        </div>
    )
}

export default Login
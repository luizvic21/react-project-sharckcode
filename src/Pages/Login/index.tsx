import React from 'react';

import './style.css';

import sharkcode_logo from '../../images/sharckcode_logo.svg';
import figure from '../../images/figure.svg';

function Login() {
    return (
        <div className="login-pafe">
            <header>
                <img src={sharkcode_logo} alt="logo da sharkcode"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, animi!</p>
                <img src={figure} alt="venha codar"/>
            </header>
            <main>
                <legend>Fazer Login</legend>
                <form action="">
                    <label key="email">E-mail</label>
                    <input type="email" name="email" id="email"/>
                    <label key="password">Senha</label>
                    <input type="password" name="password" id="password"/>
                    <input type="checkbox" name="remember" id="remember"/>
                    <label>Lembrar-me</label>
                    <a href="#"><label className="label-options">Esqueci minha senha</label></a>
                    <input type="submit" value="Entrar" id="button-submit"/>
                </form>
                <p>Opa! Ainda não possue cadastro?</p>
                <a href="#">cadastre-se agora</a>
            </main>
        </div>
    )
}

export default Login;
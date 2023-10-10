import React, { useState } from 'react';
import '../App.css';
import imgstar from '../imgstar.png';
import logo from '../logo.png';

function LoginForm() {

    const [nomeUsuario, setnomeUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const usuarios = [
        { nome: "lucas", senha: "123" },
        { nome: "antonio", senha: "123" },
        { nome: "bell", senha: "123" },

    ];

    function manipulaLogin() {
        const usuarioValido = usuarios.find(user => user.nome === nomeUsuario && user.senha === senhaUsuario);

        if (usuarioValido) {
            window.location.href = "./Home";
        } else {
            setErrorMessage('Nome de usuário ou senha incorretos.');
        }
    }
    return (

        <div>

            <header className="App-header">
                <div className="content">
                    <div className="left-section">
                        <img src={imgstar} alt="stargram" className="imgstar" />
                    </div>

                    <div className="right-section">
                        <div className="login-container">
                            <img src={logo} alt="Stargram" className="logo" width="200" />
                            
                            <form className="login-form">
                                
                                    <input className='imp1'
                                        type="text"
                                        placeholder=" Phono number, username, or email"
                                        value={nomeUsuario}
                                        onChange={(e) => setnomeUsuario(e.target.value)}
                                        required
                                    />
                                    <input className='imp1'
                                        type=" password"
                                        placeholder=" Password"
                                        value={senhaUsuario}
                                        onChange={(e) => setSenhaUsuario(e.target.value)}
                                        required

                                        
                                        
                                    />
                                    
                            </form>

                            <button className='buut' onClick={manipulaLogin}>Login in</button>
                                    <p style={{ color: 'red' }}>{errorMessage}</p>

                            <div className="separator">
                                <div className="line"></div>
                                <span>OU</span>
                                <div className="line"></div>
                            </div>

                            <div className="options">
                                <a href="#">Esqueceu a senha?</a>
                                <span> · </span>
                                <a href="#">Cadastre-se</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default LoginForm;
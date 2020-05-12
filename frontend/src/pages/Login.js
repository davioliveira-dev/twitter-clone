import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import './Login.css';
import twitterLogo from '../twitter.svg';

function Login() {

  const [username, setUsername] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    if(!username.length) return alert('Digite seu usuário!');

    localStorage.setItem('@Twitter-clone:username', username);

    history.push('/timeline')

  }

  return(
    <div className="login-wrapper">
      <img src={twitterLogo} alt="Twitter-clone Logo"/>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome de usuário" value={username} onChange={e => setUsername(e.target.value)}/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
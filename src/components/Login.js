import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nazwa" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Hasło" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Zaloguj</button>
    </form>
  );
}

export default Login;
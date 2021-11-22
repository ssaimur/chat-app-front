import React, { useState } from 'react';
import { useSocketCntext } from '../context';

const url = 'http://localhost:4000';

const Login = () => {
  const { setUser } = useSocketCntext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${url}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });

    const data = await response.json();
    setUser(data);
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='log in' />
      </form>
    </div>
  );
};

export default Login;

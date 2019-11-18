import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('', {
                username: username,
                password: password
            })
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('');
            })
            .catch(err => console.log(err));
    };

    return (
        <>
        <h2>Welcome to your new favorite way to share your recipes!</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
        </form>
        </>
    );
};

export default Login;
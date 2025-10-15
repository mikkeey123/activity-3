import './Login.css'
import React, { useState } from 'react';

import user_icon from '../assets/user.png'
import password_icon from '../assets/password.png'

const Login = ({Correctusername,Correctpassword})=>{
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (username === Correctusername && password === Correctpassword) {
            alert('Login successful!')
        } else {
            alert('Wrong username or password!')
        }
    }
    
    return(
        <div className='container'>

            <div className="header">
                <div className="text">Log-in</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)} placeholder='Name' />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Password'/>
                </div>
            </div>

            <div className="submit-container">
                <div className="submit" onClick={handleLogin}>Log-in</div>
            </div>

        </div>
    )
}

export default Login
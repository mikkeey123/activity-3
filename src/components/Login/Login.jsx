import React from 'react'
import './Login.css'

import user_icon from '../assets/user.png'
import password_icon from '../assets/password.png'

const Login = ()=>{
    
    
    return(
        <div className='container'>

            <div className="header">
                <div className="text">Log-in</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>

            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>

            <div className="submit-container">
                <div className="submit">Sign-up</div>
                <div className="submit">Log-in</div>
            </div>

        </div>
    )
}

export default Login
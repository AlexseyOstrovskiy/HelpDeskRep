import React from 'react';
import style from './RegustrationPage.module.css';
import { NavLink } from 'react-router-dom';

const RegistrationPage = (props) => {
    return (
        <div className={style.registrationForm} >
            <h1>Login to the HelpDesk</h1>
            <p>
                <label for="UserName">UserName:</label>
                <input type="text" id="username" ></input>
            </p>
            <p>
                <label for="Password">Password:</label>
                <input type="text" id="password" ></input>
            </p>
            <button>Enter</button>
            
            <NavLink to='/next'> 
            <button>Enter withOut registration</button>
            </NavLink>
        </div>
    )
}

export default RegistrationPage;
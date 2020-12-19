import React from 'react';
import style from './RegustrationPage.module.css';

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
            <button>Enter withOut registration</button>
        </div>
    )
}

export default RegistrationPage;
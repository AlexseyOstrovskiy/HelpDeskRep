import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {updateNewDescription, addNewMyTicketFromState, updateNewName}  from './redux/state';


export let rerenderEntireTree =(state)=>{
ReactDOM.render(
  <React.StrictMode>
    <App state={state}
          updateNewDescription = {updateNewDescription}
          addNewMyTicketFromState = {addNewMyTicketFromState}
          updateNewName = {updateNewName}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
} 


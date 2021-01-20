import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state';
import App from './App';

 let rerenderEntireTree =(state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App state={state}
              updateNewDescription = {store.updateNewDescription}
              addNewMyTicketFromState = {store.addNewMyTicketFromState}
              updateNewName = {store.updateNewName}
              updateNewComment = {store.updateNewComment}
        />
      </React.StrictMode>,
      document.getElementById('root')
    );
    } 

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


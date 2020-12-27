import React from 'react';
import style from './BtnAllTicket.module.css';
import { NavLink } from 'react-router-dom';

const BtnAllTicket = (props) => {
    return (
        <div className={style.BtnAllTicketGrid}>  
        <NavLink exact to='/createnewticket' className={style.AllButton}>Create New Ticket</NavLink>
        <NavLink exact to='/tablewithallticket' className={style.AllButton}>All Ticket</NavLink>
        <NavLink exact to='/tablewithmyticket' className={style.AllButton}>My Ticket</NavLink>
        <br></br>
        <br></br>
    </div>
    );
}

export default BtnAllTicket;
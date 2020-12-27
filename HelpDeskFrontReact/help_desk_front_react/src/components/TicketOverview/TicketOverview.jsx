import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import style from './TicketOverview.module.css';
import TicketOverviewHistory from './TicketOverviewHistory/TicketOverviewHistory';
import TicketOverviewComments from './TicketOverviewComments/TicketOverviewComments';

const TicketOverview = (props) => {
    return (
    
       <div className={style.maincontainer}>
           TicketOverview
           <p>
               <NavLink to='/allticket' className={style.AllButton}>Ticket List</NavLink>
           </p>
           <p>
           <NavLink to='/edit' className={style.AllButton}>Edit</NavLink>
           </p>
           <p>
           <NavLink to='/history' className={style.AllButton}>History</NavLink>
           </p>
           <p>
           <NavLink to='/comments' className={style.AllButton}>Comments</NavLink>
           </p>

       </div>
   
    )
}

export default TicketOverview;
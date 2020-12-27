import React from 'react';
import style from './TicketOverviewComments.module.css';
import { NavLink } from 'react-router-dom';


const TicketOverviewComments = (props) => {
    return (
       <div className={style.maincontainer}>
           <p>
               <NavLink exact to ='/feedback' className={style.AllButton}>Feedback</NavLink> 
           </p>
           TicketOverviewComments
       </div>
    )
}

export default TicketOverviewComments;
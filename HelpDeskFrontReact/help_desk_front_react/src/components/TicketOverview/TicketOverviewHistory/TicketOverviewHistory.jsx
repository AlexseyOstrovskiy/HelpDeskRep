import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './TicketOverviewHistory.module.css';



const TicketOverviewHistory = (props) => {
    return (
       <div className={style.maincontainer}>
           <p>
               <NavLink exact to ='/leavefeedback' className={style.AllButton}>Leave Feedback</NavLink> 
           </p>
           TicketOverviewHistory
       </div>
    )
}

export default TicketOverviewHistory;
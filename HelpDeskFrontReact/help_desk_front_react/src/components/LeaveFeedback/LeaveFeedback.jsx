import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './LeaveFeedback.module.css';


const LeaveFeedback = (props) => {
    return (
       <div>
           LeaveFeedback
           <p>
               <NavLink exact to='/ticketoverview'>Back</NavLink>
           </p>
           <p>
           <NavLink exact to='/allticket'>Submit</NavLink>
           </p>
       </div>
    )
}

export default LeaveFeedback;
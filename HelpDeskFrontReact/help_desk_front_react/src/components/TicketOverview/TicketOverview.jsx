import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './TicketOverview.module.css';


const TicketOverview = (props) => {
    return (
       <div>
           TicketOverview
           <p>
               <NavLink to='/allticket'>Ticket List</NavLink>
           </p>
           <p>
           <NavLink to='/edit'>Edit</NavLink>
           </p>
           <p>
           <NavLink to='/leavefeedback'>Leave Feedback</NavLink>
           </p>
           <p>
           <button>History</button>
           </p>
           <p>
           <button>Comments</button>
           </p>
       </div>
    )
}

export default TicketOverview;
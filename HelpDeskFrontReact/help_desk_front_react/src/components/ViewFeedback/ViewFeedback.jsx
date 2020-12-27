import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ViewFeedback.module.css';


const ViewFeedback = (props) => {
    return (
       <div>
           <p>
               <NavLink exact to='/ticketoverview'>Back</NavLink>
           </p>
           ViewFeedback
       </div>
    )
}

export default ViewFeedback;
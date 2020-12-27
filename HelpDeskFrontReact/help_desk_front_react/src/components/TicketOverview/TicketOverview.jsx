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
               <NavLink to='/allticket'>Ticket List</NavLink>
           </p>
           <p>
           <NavLink to='/edit'>Edit</NavLink>
           </p>
           <p>
           <NavLink to='/leavefeedback'>Leave Feedback</NavLink>
           </p>
           <p>
           <NavLink to='/history'>History</NavLink>
           {/* <button>History</button> */}
           </p>
           <p>
           {/* <button>Comments</button> */}
           <NavLink to='/comments'>Comments</NavLink>
           </p>
           {/* <Route exact path='/history' component={TicketOverviewHistory}/>
           <Route exact path='/comments' component={TicketOverviewComments}/> */}
           {/* <TicketOverviewHistory/> */}

       </div>
   
    )
}

export default TicketOverview;
import React from 'react';
import { NavLink } from 'react-router-dom';
import TableTicket from './TableTicket/TableTicket';


const AllTicket = (props) => {
    return (
        <div>  
       {/* <button>Create New Ticket</button> */}
       <NavLink exact to='/createnewticket'>Create New Ticket</NavLink>
       <br></br>
       <br></br>
       <button>All Tickets</button>
       <button>My Tickets</button>
       <br></br>
       <br></br>
    <TableTicket/>
   </div>
    );
}

export default AllTicket;
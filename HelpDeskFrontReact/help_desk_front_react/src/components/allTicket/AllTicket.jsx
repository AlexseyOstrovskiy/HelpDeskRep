import React from 'react';
import { NavLink } from 'react-router-dom';

const AllTicket = (props) => {
    return (
        <div>
            
       <button>Create New Ticket</button>
       <br></br>
       <br></br>
       <button>All Tickets</button>
       <button>My Tickets</button>
       <br></br>
       <br></br>
       <table border="1">
        <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Desired Date</td>
        <td>Urgency</td>
        <td>Status</td>
        <td>Action</td>
        </tr>
        <tr>
            <td>1 1</td>
            <td>2 1</td>
            <td>3 1</td>
            <td>4 1</td>
            <td>5 1</td>
            <td>6 1</td>
        </tr>
        <tr>
            <td>1 2</td>
            <td>2 2</td>
            <td>3 2</td>
            <td>4 2</td>
            <td>5 2</td>
            <td>6 2</td>
        </tr>
        </table>
       
   </div>
    )
}

export default AllTicket;
import React from 'react';
import style from './TableWithMyTicket.module.css';

const TableWithMyTicket = (props) => {
// let ticketData={
//     myTicketData = {
//         myTicket={
//             id:1,
//             name:"SomeNameMyTicket1",
//             desiredDate: "12.11.2020",
//             urgency:"low",
//             status:"kwo",
//             action:"done"
//                 },
//         myTicket={
//             id:1,
//             name:"SomeNameMyTicket2",
//             desiredDate: "12.12.2020",
//             urgency:"high",
//             status:"kwo",
//             action:"non"
//                 },
//                 myTicket={
//             id:1,
//             name:"SomeNameMyTicket3",
//             desiredDate: "12.5.2020",
//             urgency:"low",
//             status:"kwokwo",
//             action:"non"
//                         }
//     },

//     TicketData = {
//         Ticket={
//             id:1,
//             name:"SomeTicket1",
//             desiredDate: "12.11.2020",
//             urgency:"low",
//             status:"kwo",
//             action:"done"
//                 },
//         Ticket={
//             id:1,
//             name:"SomeTicket2",
//             desiredDate: "12.12.2020",
//             urgency:"high",
//             status:"kwo",
//             action:"non"
//                 },
//         Ticket={
//             id:1,
//             name:"SomeTicket3",
//             desiredDate: "12.5.2020",
//             urgency:"low",
//             status:"kwokwo",
//             action:"non"
//                         }
//     }
// }

let idElements = props.state.ticketData.myTicketData.map((i) => i.id);

    return (
        <div className={style.style}>
            <h2>Table with My ticket!</h2>
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
                    <td>{idElements}</td>
                    <td>{ticketData.name}</td>
                    <td>{ticketData.desiredDate}</td>
                    <td>{ticketData.urgency}</td>
                    <td>{ticketData.status}</td>
                    <td>{ticketData.action}</td>
                </tr>
                <tr>
                    <td>1 2</td>
                    <td>2 2</td>
                    <td>3 2</td>
                    <td>4 2</td>
                    <td>My ticket!</td>
                    <td>6 2</td>
                </tr>
            </table>

        </div>
    );
}

export default TableWithMyTicket;
import React from 'react';
import style from './TableWithMyTicket.module.css';

const TableWithMyTicket = (props) => {
    let state = props.state;
    let idElements = state.ticketData.myTicketData.map((i) => i.id);
    let nameElements = state.ticketData.myTicketData.map((n) => n.name);
    let desiredDateElements = state.ticketData.myTicketData.map((d) => d.desiredDate);
    let urgencyElements = state.ticketData.myTicketData.map((u) => u.urgency);
    let statusElements = state.ticketData.myTicketData.map((s) => s.status);
    let actionElements = state.ticketData.myTicketData.map((a) => a.action);
    

    return (
        <div className={style.style}>
            <h2>Table with My ticket!</h2>
            {/* <table border="1">
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Desired Date</td>
                    <td>Urgency</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                <tr>
                    <td> {idElements} </td>
                    <td> {nameElements} </td>
                    <td> {desiredDateElements} </td>
                    <td> {urgencyElements} </td>
                    <td> {statusElements} </td>
                    <td> {actionElements} </td>
                </tr>
               
            </table> */}

            <div>
               
                    <div>ID</div>
               
                
                    <div className={style.elementsStyle}>
                        {idElements}
                    </div>
                
            </div>

           

        </div>
    );
}

export default TableWithMyTicket;
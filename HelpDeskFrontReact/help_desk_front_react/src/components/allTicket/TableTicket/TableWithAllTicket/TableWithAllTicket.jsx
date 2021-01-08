import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './TableWithAllTicket.module.css';
import NameItem from '../ItemsForTableWithTicket/NameItem';
import IdItem from '../ItemsForTableWithTicket/IdItem';
import DesiredDateItem from '../ItemsForTableWithTicket/DesiredDateItem';
import UrgencyItem from '../ItemsForTableWithTicket/UrgencyItem';
import StatusItem from '../ItemsForTableWithTicket/StatusItem';
import ActionItem from '../ItemsForTableWithTicket/ActionItem';
import idElements from '../TableWithMyTicket/TableWithMyTicket';


const TableWithAllTicket = (props) => {
    let state = props.state;

    let idNotMyElements = state.allTicketData.map((i) => <IdItem id={i.id} />);
    let nameNotMyElements = state.allTicketData.map((n) => <NameItem name={n.name} />);
    let desiredDateNotMyElements = state.allTicketData.map((d) => <DesiredDateItem desiredDate={d.desiredDate} />);
    let urgencyNotMyElements = state.allTicketData.map((u) => <UrgencyItem urgency={u.urgency} />);
    let statusNotMyElements = state.allTicketData.map((s) => <StatusItem status={s.status} />);
    let actionNotMyElements = state.allTicketData.map((a) => <ActionItem action={a.action} />);

    let idElements = state.myTicketData.map((i) => <IdItem id={i.id} />);
    let nameElements = state.myTicketData.map((n) => <NameItem name={n.name} />);
    let desiredDateElements = state.myTicketData.map((d) => <DesiredDateItem desiredDate={d.desiredDate} />);
    let urgencyElements = state.myTicketData.map((u) => <UrgencyItem urgency={u.urgency} />);
    let statusElements = state.myTicketData.map((s) => <StatusItem status={s.status} />);
    let actionElements = state.myTicketData.map((a) => <ActionItem action={a.action} />);

    return (
        <div className={style.style}>
            <h2>Table with all ticket!</h2>


            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>desiredDate</td>
                    <td>urgency</td>
                    <td>status</td>
                    <td>action</td>
                </tr>
                <tr>
                    <td> {idNotMyElements}</td>
                    <td> {nameNotMyElements}</td>
                    <td>{desiredDateNotMyElements}</td>
                    <td>{urgencyNotMyElements}</td>
                    <td>{statusNotMyElements}</td>
                    <td>{actionNotMyElements}</td>
                </tr>
                <tr>
                    <td> {idElements}</td>
                    <td> {nameElements}</td>
                    <td>{desiredDateElements}</td>
                    <td>{urgencyElements}</td>
                    <td>{statusElements}</td>
                    <td>{actionElements}</td>
                </tr>
            </table>


        </div>
    );
}

export default TableWithAllTicket;
import React from 'react';
import style from './TableWithMyTicket.module.css';



const TableWithMyTicket = (props) => {
    let state = props.state;

    const NameItem = (props) => {
        return (
            <div>{props.name}</div>
        )
    }

    const IdItem = (props) => {
        return (
            <div>{props.id}</div>
        )
    }

    const DesiredDateItem = (props) => {
        return (
            <div>{props.desiredDate}</div>
        )
    }

    const UrgencyItem = (props) => {
        return (
            <div>{props.urgency}</div>
        )
    }

    const StatusItem = (props) => {
        return (
            <div>{props.status}</div>
        )
    }

    const ActionItem = (props) => {
        return (
            <div>{props.action}</div>
        )
    }

    let idElements = state.myTicketData.map((i) => <IdItem id={i.id} />);
    let nameElements = state.myTicketData.map((n) => <NameItem name={n.name} />);
    let desiredDateElements = state.myTicketData.map((d) => <DesiredDateItem desiredDate={d.desiredDate} />);
    let urgencyElements = state.myTicketData.map((u) => <UrgencyItem urgency={u.urgency} />);
    let statusElements = state.myTicketData.map((s) => <StatusItem status={s.status} />);
    let actionElements = state.myTicketData.map((a) => <ActionItem action={a.action} />);

    return (
        <div className={style.style}>
            <h2>Table with My ticket!</h2>

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

export default TableWithMyTicket;
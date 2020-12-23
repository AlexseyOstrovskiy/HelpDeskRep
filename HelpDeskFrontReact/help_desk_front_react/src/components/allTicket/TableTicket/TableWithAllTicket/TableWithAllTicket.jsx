import React from 'react';
import style from './TableWithAllTicket.module.css';

const TableWithAllTicket = (props) => {
    return (
        <div className={style.style}>
            <h2>Table with all ticket!</h2>
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
    );
}

export default TableWithAllTicket;
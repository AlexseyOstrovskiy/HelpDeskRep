import React from 'react';
import style from './TableWithMyTicket.module.css';

const TableWithMyTicket = (props) => {
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
                    <td>My ticket!</td>
                    <td>2 1</td>
                    <td>3 1</td>
                    <td>My ticket!</td>
                    <td>5 1</td>
                    <td>6 1</td>
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
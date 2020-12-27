import React from 'react';
import style from './EditTicket.module.css';
import { NavLink } from 'react-router-dom';

const EditTicket = (props) => {
    return (
        <div className={style.parent}>
            <NavLink exact to='/ticketoverview' >Ticket Overview</NavLink>
            <div className={style.CreateTicketMainContainer}>
                <h1>EditTicket!</h1>

                <table >
                    <tbody>
                        <tr>
                            <td>Category:</td>
                            <td>
                                <select>
                                    <option>Technical assistance</option>
                                    <option>Chancery</option>
                                    <option>Need to talk!</option>
                                    <option>I want beer and pizza!</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input type="text" id="name" ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>
                                <textarea placeholder="you description"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>Urgency:</td>
                            <td>
                                <select>
                                    <option>High</option>
                                    <option>Average</option>
                                    <option>Low</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Desired resolution date:</td>
                            <td>
                                <input type="date" id="name" ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Add attachments:</td>
                            <td>
                                <button>Browse</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Comment:</td>
                            <td>
                                <textarea placeholder="you comment"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <button>Save as draft</button>
                    <button>Submit</button>
                </p>

            </div>
        </div>
    )
}

export default EditTicket;
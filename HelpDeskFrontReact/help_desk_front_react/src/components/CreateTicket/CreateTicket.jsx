import React from 'react';
import style from './CreateTicket.module.css';
import { NavLink } from 'react-router-dom';

const CreateTicket = (props) => {
    let addDescriptionRef = React.createRef();

    let submitButtonOnClick = () => {
        addName();
        addDescription(); 
    }

    let addDescription = () => {
        let textAddDescription = addDescriptionRef.current.value;
        alert(textAddDescription);
    }

    let addNameRef = React.createRef();
    let addName = () => {
        let textAddName = addNameRef.current.value;
        alert(textAddName);
    }

    return (
        <div className={style.parent}>
            <NavLink exact to='/tablewithallticket' >Ticket List</NavLink>
            <div className={style.CreateTicketMainContainer}>
                <h1>Create new Ticket!</h1>

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
                                <input type="text" id="name" ref={addNameRef}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>
                                <textarea placeholder="you description" ref={addDescriptionRef}></textarea>
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
                    <button onClick={submitButtonOnClick} >Submit</button>
                </p>

            </div>
        </div>
    )
}

export default CreateTicket;
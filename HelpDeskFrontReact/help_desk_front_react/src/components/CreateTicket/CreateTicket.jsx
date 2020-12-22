import React from 'react';
import style from './CreateTicket.module.css';
import { NavLink } from 'react-router-dom';

const CreateTicket = (props) => {
    return (
        <div>
            <h1>Create new Ticket!</h1>

            <p>
                <label for="Category">Category:</label>
                <select>
                    <option>Technical assistance</option>
                    <option>Chancery</option>
                    <option>Need to talk!</option>
                    <option>I want beer and pizza!</option>
                </select>
            </p>

            <p>
                <label for="Name">Name:</label>
                <input type="text" id="name" ></input>
            </p>

            <p>
                <label for="Description">Description:</label>
                <textarea placeholder="you description"></textarea>
            </p>

            <p>
                <label for="Urgency">Urgency:</label>
                <select>
                    <option>High</option>
                    <option>Average</option>
                    <option>Low</option>
                </select>
            </p>

            <p>
                <label for="DesiredResolutionDate">Desired resolution date:</label>
                <input type="date" id="name" ></input>
            </p>

            <p>
                <label for="AddAttachments">Add attachments:</label>
               <button>Browse</button>
            </p>

            <p>
                <label for="Comment">Comment:</label>
                <textarea placeholder="you comment"></textarea>
            </p>

            <p>
                <button>Save as draft</button>
                <button>Submit</button>
            </p>

        </div>
    )
}

export default CreateTicket;
import React from 'react';
import style from './CreateTicket.module.css';
import { NavLink } from 'react-router-dom';
import state, { addNewMyTicketFromStateActionCreator, updateNewCommentActionCreator, updateNewDescriptionActionCreator, updateNewNameActionCreator } from '../../redux/state';

const CreateTicket = (props) => {
    let addDescriptionRef = React.createRef();
    let addNameRef = React.createRef();
    let desiredDateRef = React.createRef();
    let urgencyRef = React.createRef();
    // let statusRef= React.createRef();
    // let actionRef = React.createRef();
    let myCategoryRef = React.createRef();
    let commentRef = React.createRef();


    let submitButtonOnClick = () => {
        let dataDesiredData = desiredDateRef.current.value;
        let urgencyUrgency = urgencyRef.current.value;
        let categoryCategory = myCategoryRef.current.value;
        props.dispatch(addNewMyTicketFromStateActionCreator(dataDesiredData,
        urgencyUrgency, categoryCategory))
        // props.addNewMyTicketFromState(
        //     dataDesiredData,
        //     urgencyUrgency, categoryCategory
        //     );
        alert("New Ticket created");
    }

    let nameChange = () => {
        let changedName = addNameRef.current.value;
        props.dispatch(updateNewNameActionCreator(changedName))
        // props.updateNewName(changedName);
    }

    let descriptionChange = () => {
        let changedDescription = addDescriptionRef.current.value;
        props.dispatch(updateNewDescriptionActionCreator(changedDescription))
        // props.updateNewDescription(changedDescription);
    }

    let commentChange = () =>{
        let changedComment = commentRef.current.value;
        props.dispatch(updateNewCommentActionCreator(changedComment))
        // props.updateNewComment(changedComment);
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
                                <select id='selectCategoryId' ref={myCategoryRef}>
                                    <option value='Technical assistance'>Technical assistance</option>
                                    <option value='Chancery'>Chancery</option>
                                    <option value='Need to talk!'>Need to talk!</option>
                                    <option value='I want beer and pizza!'>I want beer and pizza!</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input type="text" id="name" value={props.state.creatTicketData.nameFromState} onChange={nameChange} ref={addNameRef}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>
                                <textarea placeholder="you description" ref={addDescriptionRef} value={props.state.creatTicketData.descriptionFromState} onChange={descriptionChange}  ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>Urgency:</td>
                            <td>
                                <select id='selectUrgencyId' ref={urgencyRef}>
                                    <option value='High'>High</option>
                                    <option value='Average'>Average</option>
                                    <option value='Low'>Low</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Desired resolution date:</td>
                            <td>
                                <input type="Date" id="name" ref={desiredDateRef} ></input>
                                {/* поменять вид представления даты */}
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
                                <textarea  ref={commentRef} value={props.state.creatTicketData.commentFromState} onChange={commentChange}></textarea>
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
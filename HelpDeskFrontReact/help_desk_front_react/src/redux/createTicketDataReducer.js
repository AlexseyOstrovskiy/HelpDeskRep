

const ADD_NEW_MY_TICKET_FROM_STATE = 'ADD-NEW-MY-TICKET-FROM-STATE';
const UPDATE_NEW_NAME = 'UPDATE-NEW-NAME';
const UPDATE_NEW_DESCRIPTION ='UPDATE-NEW_DESCRIPTION';
const UPDATE_NEW_COMMENT = 'UPDATE-NEW-COMMENT';

let idForNewMyTicket =1;
const createTicketReducer =  (state, action) =>{
    
    if (action.type === ADD_NEW_MY_TICKET_FROM_STATE){
        let newMyTicket = {
            id: idForNewMyTicket +1,
            name: state.nameFromState,
            desiredDate: action.desiredDateTicket,
            urgency: action.urgencyUrgency,
            status: "kwokwo",
            action: "non",
            category: action.categoryCategory,
            description: state.descriptionFromState,
            comment: state.commentFromState
        };
        idForNewMyTicket = newMyTicket.id;
        return newMyTicket;
        // _state.myTicketData.push(newMyTicket);
        
    }
    else if(action.type === UPDATE_NEW_NAME){
        state.nameFromState = action.changedName;
        console.log(state.nameFromState);
        return state;
    }
    else if(action.type === UPDATE_NEW_DESCRIPTION){
        state.descriptionFromState = action.changedDescription;
    console.log(state.descriptionFromState);
    return state;
    }
    else if(action.type === UPDATE_NEW_COMMENT){
        state.commentFromState = action.changedComment;
        console.log(state.commentFromState);
        return state;
    }
    }

    export const addNewMyTicketFromStateActionCreator = (desiredDateTicket, urgencyUrgency,categoryCategory) =>{
        return{
            type:ADD_NEW_MY_TICKET_FROM_STATE,
            desiredDateTicket:desiredDateTicket,
            urgencyUrgency:urgencyUrgency,
            categoryCategory:categoryCategory
        }
    }
    
    export const updateNewNameActionCreator = (changedName) =>{
        return{
            type:UPDATE_NEW_NAME,
            changedName:changedName
        }
    }
    
    export const updateNewDescriptionActionCreator = (changedDescription) =>{
        return{
            type:UPDATE_NEW_DESCRIPTION,
            changedDescription:changedDescription
        }
    }
    
    export const updateNewCommentActionCreator = (changedComment) =>{
        return{
            type:UPDATE_NEW_COMMENT,
            changedComment:changedComment
        }
    }
    export default createTicketReducer;
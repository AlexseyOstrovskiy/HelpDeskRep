import createTicketReducer from '../redux/createTicketDataReducer';
import allTicketReducer from '../redux/allTicketDataReducer';
import myTicketReducer from '../redux/myTicketDataReducer';

let store = {
   _state : {

        myTicketData: [
            {
                id: 1,
                name: "SomeNameMyTicket1",
                desiredDate: "12.11.2020",
                urgency: "low",
                status: "kwo",
                action: "done",
                category: " ",
                description: " ",
                comment: " "
            },
            {
                id: 2,
                name: "SomeNameMyTicket2",
                desiredDate: "12.12.2020",
                urgency: "high",
                status: "kwo",
                action: "non",
                category: " ",
                description: " ",
                comment: " "
            },
            {
                id: 3,
                name: "SomeNameMyTicket3",
                desiredDate: "12.5.2020",
                urgency: "low",
                status: "kwokwo",
                action: "non",
                category: " ",
                description: " ",
                comment: " "
            }
        ],
    
        allTicketData: [
            {
                id: 144444444444444,
                name: "SomeTicket1",
                desiredDate: "12.11.2020",
                urgency: "low",
                status: "kwo",
                action: "done"
            },
            {
                id: 155555555555555555,
                name: "SomeTicket2",
                desiredDate: "12.12.2020",
                urgency: "high",
                status: "kwo",
                action: "non"
            },
            {
                id: 166666666666666,
                name: "SomeTicket3",
                desiredDate: "12.5.2020",
                urgency: "low",
                status: "kwokwo",
                action: "non"
            }
        ],
       
        creatTicketData: {
            id: '',
            nameFromState: 'someNamefromState',
            desiredDateFromState: '',
            urgencyFromState: 'some urgency from state',
            statusFromState: 'some status from state',
            actionFromState: 'some action fro state',
            categoryFromState: 'some category from state',
            descriptionFromState: 'input new Description now',
            commentFromState: 'some comment from state'
    
        }
        
    }, 
    _callSubscriber () {
        console.log('State was change')
    },
    subscribe  (observer) {
        this._callSubscriber = observer;
    },
    getState(){
        return this._state
    },
    
    dispatch(action){
        // this._state.creatTicketData = createTicketReducer(this._state.creatTicketData, action);
        let newMyTicket = createTicketReducer(this._state.creatTicketData, action);
        this._state.myTicketData.push(newMyTicket);
        this._state.myTicketData = myTicketReducer(this._state.myTicketData, action);
        this._state.allTicketData = allTicketReducer(this._state.allTicketData, action);
        this._callSubscriber(this._state);

        // if (action.type === ADD_NEW_MY_TICKET_FROM_STATE){
        //     let newMyTicket = {
        //         id: this._state.creatTicketData.id,
        //         name: this._state.creatTicketData.nameFromState,
        //         desiredDate: action.desiredDateTicket,
        //         urgency: action.urgencyUrgency,
        //         status: "kwokwo",
        //         action: "non",
        //         category: action.categoryCategory,
        //         description: this._state.creatTicketData.descriptionFromState,
        //         comment: this._state.creatTicketData.commentFromState
        //     };
        //     this._state.myTicketData.push(newMyTicket);
        // }
        // else if(action.type === UPDATE_NEW_NAME){
        //     this._state.creatTicketData.nameFromState = action.changedName;
        //     console.log(this._state.creatTicketData.nameFromState);
        //     this._callSubscriber(this._state);
        // }
        // else if(action.type === UPDATE_NEW_DESCRIPTION){
        //       this._state.creatTicketData.descriptionFromState = action.changedDescription;
        // console.log(this._state.creatTicketData.descriptionFromState);
        // this._callSubscriber(this._state);
        // }
        // else if(action.type === UPDATE_NEW_COMMENT){
        //     this._state.creatTicketData.commentFromState = action.changedComment;
        //     console.log(this._state.creatTicketData.commentFromState);
        //     this._callSubscriber(this._state);
        // }
        

    }
        // addNewMyTicketFromState (desiredDateTicket, urgencyUrgency,categoryCategory)  {
    //     let newMyTicket = {
    //         id: this._state.myTicketData.length + 1,

    //         name: this._state.creatTicketData.nameFromState,
    //         desiredDate: desiredDateTicket,
    //         urgency: urgencyUrgency,
    //         status: "kwokwo",
    //         action: "non",
    //         category: categoryCategory,
    //         description: this._state.creatTicketData.descriptionFromState,
    //         comment: this._state.creatTicketData.commentFromState
    //     }
    //     this._state.myTicketData.push(newMyTicket);

    // },
    // updateNewName(changedName){
    //     this._state.creatTicketData.nameFromState = changedName;
    //     console.log(this._state.creatTicketData.nameFromState);
    //     this._callSubscriber(this._state);
    // },
    // updateNewDescription (changedDescription) {
    //     this._state.creatTicketData.descriptionFromState = changedDescription;
    //     console.log(this._state.creatTicketData.descriptionFromState);
    //     this._callSubscriber(this._state);
    // },
    // updateNewComment (changedComment){
    //     this._state.creatTicketData.commentFromState = changedComment;
    //     console.log(this._state.creatTicketData.commentFromState);
    //     this._callSubscriber(this._state);
    // }
}


// let rerenderEntireTree = () =>{
//     console.log('State was change')
// }

// let state = {

//     myTicketData: [
//         {
//             id: 1,
//             name: "SomeNameMyTicket1",
//             desiredDate: "12.11.2020",
//             urgency: "low",
//             status: "kwo",
//             action: "done",
//             category: " ",
//             description: " ",
//             comment: " "
//         },
//         {
//             id: 2,
//             name: "SomeNameMyTicket2",
//             desiredDate: "12.12.2020",
//             urgency: "high",
//             status: "kwo",
//             action: "non",
//             category: " ",
//             description: " ",
//             comment: " "
//         },
//         {
//             id: 3,
//             name: "SomeNameMyTicket3",
//             desiredDate: "12.5.2020",
//             urgency: "low",
//             status: "kwokwo",
//             action: "non",
//             category: " ",
//             description: " ",
//             comment: " "
//         }
//     ],

//     allTicketData: [
//         {
//             id: 144444444444444,
//             name: "SomeTicket1",
//             desiredDate: "12.11.2020",
//             urgency: "low",
//             status: "kwo",
//             action: "done"
//         },
//         {
//             id: 155555555555555555,
//             name: "SomeTicket2",
//             desiredDate: "12.12.2020",
//             urgency: "high",
//             status: "kwo",
//             action: "non"
//         },
//         {
//             id: 166666666666666,
//             name: "SomeTicket3",
//             desiredDate: "12.5.2020",
//             urgency: "low",
//             status: "kwokwo",
//             action: "non"
//         }
//     ],
//     creatTicketData: {
//         nameFromState: 'someNamefromState',
//         desiredDateFromState: '',
//         urgencyFromState: 'some urgency from state',
//         statusFromState: 'some status from state',
//         actionFromState: 'some action fro state',
//         categoryFromState: 'some category from state',
//         descriptionFromState: 'input new Description now',
//         commentFromState: 'some comment from state'

//     }
// }

// export let addNewMyTicketFromState =
//     (

//         desiredDateTicket, urgencyUrgency,
//         categoryCategory
//     ) => {
//         let newMyTicket = {
//             id: state.myTicketData.length + 1,

//             name: state.creatTicketData.nameFromState,
//             desiredDate: desiredDateTicket,
//             urgency: urgencyUrgency,
//             status: "kwokwo",
//             action: "non",
//             category: categoryCategory,
//             description: state.creatTicketData.descriptionFromState,
//             comment: state.creatTicketData.commentFromState
//         }
//         state.myTicketData.push(newMyTicket);

//     }

// export let updateNewName = (changedName) => {
//     state.creatTicketData.nameFromState = changedName;
//     console.log(state.creatTicketData.nameFromState);
//     rerenderEntireTree(state);
// }
// export let updateNewDescription = (changedDescription) => {
//     state.creatTicketData.descriptionFromState = changedDescription;
//     console.log(state.creatTicketData.descriptionFromState);
//     rerenderEntireTree(state);
// }

// export let updateNewComment =(changedComment)=>{
//     state.creatTicketData.commentFromState = changedComment;
//     console.log(state.creatTicketData.commentFromState);
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) =>{
//     rerenderEntireTree = observer;
// }



// let idCreateTicketData = this._state.myTicketData.length + 1;
export default store;
window.store =store;
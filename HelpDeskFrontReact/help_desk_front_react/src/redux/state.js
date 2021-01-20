import { rerenderEntireTree } from "../render";

let state ={
 
    myTicketData : [
        {
            id:1,
            name:"SomeNameMyTicket1",
            desiredDate: "12.11.2020",
            urgency:"low",
            status:"kwo",
            action:"done",
            category:" ",
            description:" ",
            comment: " "
                },
       {
            id:2,
            name:"SomeNameMyTicket2",
            desiredDate: "12.12.2020",
            urgency:"high",
            status:"kwo",
            action:"non",
            category:" ",
            description:" ",
            comment: " "
                },
        {
            id:3,
            name:"SomeNameMyTicket3",
            desiredDate: "12.5.2020",
            urgency:"low",
            status:"kwokwo",
            action:"non", 
            category:" ",
            description:" ",
            comment: " "
                        }
                    ],

   allTicketData : [
        {
            id:144444444444444,
            name:"SomeTicket1",
            desiredDate: "12.11.2020",
            urgency:"low",
            status:"kwo",
            action:"done"
                },
        {
            id:155555555555555555,
            name:"SomeTicket2",
            desiredDate: "12.12.2020",
            urgency:"high",
            status:"kwo",
            action:"non"
                },
        {
            id:166666666666666,
            name:"SomeTicket3",
            desiredDate: "12.5.2020",
            urgency:"low",
            status:"kwokwo",
            action:"non"
                        }
                    ],
    creatTicketData: {
        nameFromState: 'someNamefromState',
        desiredDateFromState: '',
        urgencyFromState: 'some urgency from state',
        statusFromState: 'some status from state',
        actionFromState: 'some action fro state',
        categoryFromState: 'some category from state',
        descriptionFromState: 'input new Description now',
        commentFromState:'some comment from state'

    }   
}

export let addNewMyTicketFromState =
    (nameTicket,desiredDateTicket, urgencyUrgency,
     categoryCategory, textAddDescription,textAddComment
     )=>{
    let newMyTicket ={
        id:state.myTicketData.length+1,
        name: nameTicket,
        desiredDate: desiredDateTicket,
        urgency:urgencyUrgency,
        status:"kwokwo",
        action:"non",
        category:categoryCategory,
        description:textAddDescription,
        comment: textAddComment
    }
    state.myTicketData.push(newMyTicket);

}

export let updateNewName =(changedName) =>{
    state.creatTicketData.nameFromState = changedName;
    console.log(state.creatTicketData.nameFromState);
    rerenderEntireTree(state);
}
export let updateNewDescription =  (newDescriptionText)=>{
        state.creatTicketData.newDescriptionText = newDescriptionText;
        rerenderEntireTree(state);
}

export default state;
import { rerenderEntireTree } from "../render";

let state ={
 
    myTicketData : [
        {
            id:111,
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
            id:222,
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
            id:333,
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
        newDescriptionText: 'input new Description now'
    }   
}

export let addNewMyTicketFromState =(nameTicket,desiredDateTicket)=>{
    let newMyTicket ={
        id:1,
        name: nameTicket,
        desiredDate: desiredDateTicket,
        urgency:"low",
        status:"kwokwo",
        action:"non",
        category:" ",
        description:" ",
        comment: " "
    }
    state.myTicketData.push(newMyTicket);

}

export let updateNewDescription =  (newDescriptionText)=>{
        state.creatTicketData.newDescriptionText = newDescriptionText;
        rerenderEntireTree(state);
}

export default state;
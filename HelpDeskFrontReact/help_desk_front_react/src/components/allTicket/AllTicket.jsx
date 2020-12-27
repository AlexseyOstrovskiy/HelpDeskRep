import React from 'react';
import TableWithMyTicket from './TableTicket/TableWithMyTicket/TableWithMyTicket';
import style from './AllTicket.module.css';
import BtnAllTicket from './BtnAllTicket/BtnAllTicket';
import { BrowserRouter, Route } from 'react-router-dom';

import CreateTicket from './../CreateTicket/CreateTicket';
import TableWithAllTicket from './TableTicket/TableWithAllTicket/TableWithAllTicket';
import Header from '../Header/Header';
import TicketOverview from './../TicketOverview/TicketOverview';
import EditTicket from './../EditTicket/EditTicket';
import LeaveFeedback from './../LeaveFeedback/LeaveFeedback';
const AllTicket = (props) => {
    return (
        <BrowserRouter>
        <div className={style.s}>
            {/* <Header /> */}
            <BtnAllTicket/>
            <Route exact path='/allticket' component={TableWithAllTicket}/>
            <Route exact path='/tablewithallticket' component={TableWithAllTicket}/>
            <Route exact path='/tablewithmyticket' component={TableWithMyTicket}/>
            <Route exact path='/createnewticket' component={CreateTicket}/>
            <Route exact path='/ticketoverview' component={TicketOverview}/>
            <Route exact path='/edit' component={EditTicket}/>
            <Route exact path='/leavefeedback' component={LeaveFeedback}/>
        </div>
        </BrowserRouter>
    );
}

export default AllTicket;
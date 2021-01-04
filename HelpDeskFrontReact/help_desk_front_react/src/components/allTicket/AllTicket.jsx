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
import TicketOverviewHistory from './../TicketOverview/TicketOverviewHistory/TicketOverviewHistory';
import TicketOverviewComments from './../TicketOverview/TicketOverviewComments/TicketOverviewComments';
import ViewFeedback from './../ViewFeedback/ViewFeedback';
import state from '../../redux/state';


const AllTicket = (props) => {
   let state = props.state;
    return (
        <BrowserRouter>
        <div className={style.s}>
            {/* <Header /> */}
            <BtnAllTicket/>
            {/* <Route exact path='/allticket' component={TableWithAllTicket}/> */}
            {/* <Route exact path='/tablewithallticket' component={TableWithAllTicket}/> */}
          
            <Route exact path='/tablewithallticket' render=
            {() => <TableWithAllTicket state={state}/>} />

            {/* <Route exact path='/tablewithmyticket' component={TableWithMyTicket}/> */}

            <Route exact path='/tablewithmyticket' render=
            {() => <TableWithMyTicket state={state}/>} />
            

            
            <Route exact path='/createnewticket' component={CreateTicket}/>
            <Route exact path='/ticketoverview' component={TicketOverview}/>
            <Route exact path='/ticketoverview' component={TicketOverviewHistory}/>
            <Route exact path='/edit' component={EditTicket}/>
            <Route exact path='/leavefeedback' component={LeaveFeedback}/>
            <Route exact path='/history' component={TicketOverview}/>
            <Route exact path='/history' component={TicketOverviewHistory}/>
            <Route exact path='/comments' component={TicketOverview}/>
            <Route exact path='/comments' component={TicketOverviewComments}/>
            <Route exact path='/feedback' component={ViewFeedback}/>
            

        </div>
        
        </BrowserRouter>
    );
}

export default AllTicket;
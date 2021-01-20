import './App.css';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import { BrowserRouter, Route } from 'react-router-dom';
import AllTicket from './components/allTicket/AllTicket';


function App(props) {

  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={RegistrationPage} />
        {/* <Route exact path='/allticket' component={AllTicket} state={props.state}/> */}

        <Route exact path='/allticket' render=
         {() => <AllTicket state={props.state}
         updateNewDescription ={props.updateNewDescription}
         addNewMyTicketFromState={props.addNewMyTicketFromState}
         updateNewName = {props.updateNewName}
                        />}/>

        {/* <Route path='/allticket' component={AllTicket} />
        <Route path='/createnewticket' component={CreateTicket}/> */}
        {/* <Route path='/tablewithmyticket' component={TableWithMyTicket}/> */}

      </div>
      
    </BrowserRouter>
  );
}

export default App;

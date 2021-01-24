import './App.css';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import { BrowserRouter, Route } from 'react-router-dom';
import AllTicket from './components/allTicket/AllTicket';


function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={RegistrationPage} />
        <Route exact path='/allticket' render=
         {() => <AllTicket state={props.state}
         dispatch={props.dispatch}
        //  updateNewDescription ={props.updateNewDescription}
        //  addNewMyTicketFromState={props.addNewMyTicketFromState}
        //  updateNewName = {props.updateNewName}
        //  updateNewDescription = {props.updateNewDescription}
        //  updateNewComment= {props.updateNewComment}
                        />}/>
      </div> 
    </BrowserRouter>
  );
}

export default App;

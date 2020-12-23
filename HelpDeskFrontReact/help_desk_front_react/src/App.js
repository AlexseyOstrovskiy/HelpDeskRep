import './App.css';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import { BrowserRouter, Route } from 'react-router-dom';
import AllTicket from './components/allTicket/AllTicket';
import CreateTicket from './components/CreateTicket/CreateTicket';
import TableWithMyTicket from './components/allTicket/TableTicket/TableWithMyTicket/TableWithMyTicket';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={RegistrationPage} />
        <Route exact path='/allticket' component={AllTicket} />
        {/* <Route path='/allticket' component={AllTicket} />
        <Route path='/createnewticket' component={CreateTicket}/> */}
        {/* <Route path='/tablewithmyticket' component={TableWithMyTicket}/> */}

      </div>
    </BrowserRouter>
  );
}

export default App;

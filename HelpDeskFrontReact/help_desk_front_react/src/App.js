import './App.css';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import { BrowserRouter, Route } from 'react-router-dom';
import AllTicket from './components/allTicket/AllTicket';
import CreateTicket from './components/CreateTicket/CreateTicket';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={RegistrationPage} />
        <Route path='/allticket' component={AllTicket} />
        <Route path='/createnewticket' component={CreateTicket}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import RegistrationPage from './components/registrationPage/RegistrationPage';
import { BrowserRouter, Route } from 'react-router-dom';
import AllTicket from './components/allTicket/AllTicket';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={RegistrationPage} />
        {/* <RegistrationPage/> */}
        <Route path='/allticket' component={AllTicket} />
      </div>
    </BrowserRouter>
  );
}

export default App;

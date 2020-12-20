import './App.css';
import RegistrationPage from './components/registrationPage/RegistrationPage';
import { BrowserRouter, Route } from 'react-router-dom';
import next from './components/nex/next';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route path='/' component ={RegistrationPage}/>
      {/* <RegistrationPage/> */}
      <Route path ='/next' component={next}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

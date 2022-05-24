
import './App.css';
import {Routes,Route} from 'react-router-dom'

import Footer from './components/Footer'
import LandingPage from './pages/LandingPage';
import Error from './pages/Error';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import EmployeeProfile from './pages/EmployeeProfile';
import ClientTicket from './pages/ClientTicket';
import ClientProfile from './pages/ClientProfile';
import ClientView from './pages/ClientView';
import EmployeeView from './pages/EmployeeView';
import AdminView from './pages/AdminView';
import Pending from './pages/Pending';

import Navme from './components/Navme';
import SigninEmp from './pages/SigninEmp';
import SigninAD from './pages/SigninAD';
import SignupEmp from './pages/SignupEmp';
import EmployeesList from './pages/EmployeesList';
import UsersList from './components/UsersList';
import TicketList from './components/TicketList';


function App() {
  return (
    <div className="App">
    
      <Navme/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/AdminView' element={<AdminView/>}/>
      <Route path='/ClientProfile' element={<ClientProfile/>}/>
      <Route path='/ClientTicket' element={<ClientTicket/>}/>
      <Route path='/ClientView' element={<ClientView/>}/>
      <Route path='/EmployeeProfile/:id' element={<EmployeeProfile/>}/>
      <Route path='/EmployeeView' element={<EmployeeView/>}/>
      <Route path='/SigninEmp' element={<SigninEmp/>}/>
      <Route path='/SignupEmp' element={<SignupEmp/>}/>
      <Route path='/SigninAD' element={<SigninAD/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Pending' element={<Pending/>}/>
      <Route path='/EmployeesList' element={<EmployeesList/>}/>
      <Route path='/UsersList' element={<UsersList/>}/>
      <Route path='/TicketList' element={<TicketList/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
 <Footer/>
    </div>
  );
}

export default App;

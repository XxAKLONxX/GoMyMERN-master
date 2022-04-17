
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navigation from './components/Navigation'
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


function App() {
  return (
    <div className="App">
    <h1>Main view</h1>
    <Navigation/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/AdminView' element={<AdminView/>}/>
      <Route path='/ClientProfile' element={<ClientProfile/>}/>
      <Route path='/ClientTicket' element={<ClientView/>}/>
      <Route path='/ClientView' element={<ClientTicket/>}/>
      <Route path='/EmployeeProfile' element={<EmployeeProfile/>}/>
      <Route path='/EmployeeView' element={<EmployeeView/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
 <Footer/>
    </div>
  );
}

export default App;

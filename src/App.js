import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/landingPage';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/userLogin';
import AdminHomePage from './Components/adminHomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/admin/*' element={<AdminHomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

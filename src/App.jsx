import './App.css';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Landingf from './pages/Landing/Landingf.jsx';
//import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
//import { ChevronDownIcon } from '@heroicons/react/20/solid'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lndintro from './pages/Landing/Lndintro.jsx';
import { useState } from "react";
import Header from './components/Header.jsx'
import Layout from './components/Layout.jsx'
import Settings from './pages/Settings/Setting.jsx';
import Report from './pages/Report/Report.jsx';
import Notification from './pages/Notification/Notification.jsx';
import Promotion from './pages/Promotion/Promotion.jsx';
import Payment from './pages/Payment/Payment.jsx';
import Pay from './pages/Payment/Pay.jsx';



function App() {
  const [searchValue, setSearchValue] = useState(""); 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Landingf" element={<Landingf/>}/>
          <Route path="/Lndintro" element={<Lndintro/>}/>
          <Route path="/Header" element={<Header/>}/>
          <Route path="/Layout" element={<Layout/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Report" element={<Report/>}/>
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/Promotion" element={<Promotion/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/Pay" element={<Pay/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

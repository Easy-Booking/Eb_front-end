import './App.css';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Landing from './pages/Landing/Landpage.jsx';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Correct path for v20
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Landing" element={<Landing/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

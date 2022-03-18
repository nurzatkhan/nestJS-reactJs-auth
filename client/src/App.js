import './App.css';
import LoginComponent from './pages/LoginComponent';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import UpdateDataForm from './pages/UpdateDataForm';

import ReqAuth from './hoc/ReqAuth'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<ReqAuth><Home/></ReqAuth>} />
        <Route path="/Register" element={<Register />} /> 
        <Route path="/UpdateDataForm/:id" element={<ReqAuth><UpdateDataForm /></ReqAuth>} /> 
        <Route path="/login" element={<LoginComponent />} /> 
      </Routes>
    </div>
  );
}

export default App;

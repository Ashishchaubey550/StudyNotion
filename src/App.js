import { Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import { useState } from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [isLogged,setIsLogged]=useState(false);
  return (
    <div className='w-screen h-screen flex flex-col bg-gray-800'>
    <Navbar isLogged={isLogged} setIsLogged={setIsLogged}></Navbar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login setIsLogged={setIsLogged}/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Dashboard" element={
      <PrivateRoute isLogged={isLogged}>
      <Dashboard/> 
      </PrivateRoute>
    } />
    </Routes>
    </div>
  );
}

export default App;

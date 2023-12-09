// App.js

import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginForm/Login';
import BookingForm from './components/Form/BookingForm';
import Lab from './components/Faculty/Take-one/Lab/Lab';
import Flogin from './components/LoginForm/Faculty-Login/Flogin';
import Receipt from './components/Form/Receipt';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path='/' Component={Home}/>
        <Route path="/flogin" component={Flogin} />
        <Route path="/bookingForm" Component={BookingForm} />
        <Route path="/lab" component={Lab} />
      
        <Route path="/receipt" element={<Receipt />} />
        {/* <Redirect from="/" to="/login" /> */}
      </Routes>
    </Router>
  );
}

export default App;

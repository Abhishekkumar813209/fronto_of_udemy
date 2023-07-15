import React from 'react';
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses'
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import  About  from './components/About/About';
function App() {
  return (
     <Router>    
       <Header />
       <div style={{ marginBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
        </Routes>
      </div>
        <Footer />
     </Router>
  );
}

export default App;

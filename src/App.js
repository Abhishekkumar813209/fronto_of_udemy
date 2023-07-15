import React from 'react';
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses'
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';


function App() {
  return (
     <Router>    
       <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />



     </Router>
  );
}

export default App;

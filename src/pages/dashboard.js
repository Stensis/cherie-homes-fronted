import React from "react";
import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from "../components/Contact";
import Footer from '../components/Footer';
import Home from "../components/Home";
import { Routes, Route,} from "react-router-dom";
import Login from "../components/Login";


// main dashboard
function Dashboard() {
  return (
  <>
    <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />

        <Route  path ="/About" element={<About />}/>

        <Route  path ="/Contact" element={<Contact />}/>

        <Route  path ="/login" element={<Login />}/>


        <Route  path ="/footer" element={<Footer />}/> 
      </Routes>
  </>
  )
}

export default Dashboard;
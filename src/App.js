import React from 'react';
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
// import Footer from './components/Footer';
import Home from "./components/Home";
import { Routes, Route,} from "react-router-dom";
// import Apartment from './components/Apartment';
import About from './components/About';
import Vendor from './components/Vendor';
import Homes from './components/Homes';

function App() {
  return (
    <div>
     <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />

        <Route  path ="/About" element={<About />}/>

        <Route  path ="/Contact" element={<Contact />}/>

        <Route  path ="/homes" element={<Homes />}/>
        
        <Route  path ="/vendor" element={<Vendor />}/>  

      </Routes>
    </div>
  );
}

export default App;






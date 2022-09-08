import React from 'react';
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
// import Footer from './components/Footer';
import Home from "./components/Home";
import { Routes, Route,} from "react-router-dom";
import Apartment from './components/Apartment';
import About from './components/About';

function App() {
  return (
    <div>
     <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />

        <Route  path ="/About" element={<About />}/>

        <Route  path ="/Contact" element={<Contact />}/>

        <Route  path ="/apartment" element={<Apartment />}/>
        
        {/* <Route  path ="/footer" element={<Footer />}/>  */}
      </Routes>
    </div>
  );
}

export default App;






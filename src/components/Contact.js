import React from "react";
import {Link} from "react-router-dom";

function Contact() {
  return (
      <div>
          <h3 className="conta" >Contact</h3>
          <div className="conta">
          <p className="links">
              <div>
                  <p className="contactInfo">Phone number:</p>
                  <Link to="+254710112271" >+254791798403</Link>
              </div>
              <hr></hr>
                  <div>
                      <p className="contactInfo">Linkedin:</p>
                      <Link to="https://www.linkedin.com/in/irene-njuguna">https://www.linkedin.com/in/irene-njuguna</Link>
                    </div>
                  <hr></hr>
              <div>
                  <p className="contactInfo">Email:</p>
                  <Link to="irenenjuguna98@gmail.com">irenenjuguna98@gmail.com</Link>
                  </div>
 
          </p>
          </div>
      </div>
    
    
  );
}

export default Contact;

import React from "react";
import { useState } from "react";

function Home() {
  const [image, setImage] = useState ([])
  const [image_url, setImage_url] = ([])

  const [houses, setHouses] = useState([]);
  async function getHouses() {
    try {
      let res = await fetch("https://backend-for-cherie-homes.herokuapp.com/houses");
      let obj = await res.json();
      // console.log(obj)
      setHouses(obj);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="home">
        <div className="card bg-dark text-white border-0">
          <img
            src="https://i.pinimg.com/736x/4a/a8/f5/4aa8f5d237daabb1ceec9aa3a3931bad.jpg"
            className="card-img"
            alt="Background"
            height="700px"
            width="90%"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title  display-3 fw-bolder mb-0">
                {" "}
                <header className="masthead">
                  <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                      <div className="col-lg-10 align-self-end">
                        <h1 className="font-weight-bold">
                          <span>🏠</span>WELCOME TO OUR HOMES<span>🏠</span>
                        </h1>
                        <hr className="divider" />
                      </div>
                      <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">
                          "When one door closes,buy another one and open it
                          yourself 🔑 "
                        </p>
                        <div className="dropdown">
                          <button
                            onClick={getHouses}
                            className="btn btn-primary"
                            type="button"
                          >
                            Our Homes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {houses.length === 0
        ? console.log("no houses found")
        : houses.map((house) => (
<>
            {/* <div className=""> */}
              {/* <div className="col-sm-6"> */}
                {/* <div className="card"> */}
                  {/* <div className="card-body"> */}
                    <h5 className="card-title">{house.type_of_house}</h5>
                    <div className="image" key={image.id}>
                      <img src={house.image_url} width="30%" height="200"
                      viewBox="0 0 318 180" />
                    </div>
                    <a href="#" className="btn btn-primary">
                    </a>
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
</>
            // <div key={house.id} classNameName="card mb-3">
            //   <h3 classNameName="card-header">{house.type_of_house}</h3>
            //   <div classNameName="card-body">
            //     <h5 classNameName="card-title">{house.location}</h5>
            //   </div>
            //   <svg
            //     xmlns={house.image_url}
            //     classNameName="d-block user-select-none"
            //     width="100%"
            //     height="200"
            //     aria-label={house.type_of_house}
            //     focusable="false"
            //     role="img"
            //     preserveAspectRatio="xMidYMid slice"
            //     viewBox="0 0 318 180"

            //   >
            //     <rect width="100%" height="100%" fill="#868e96"></rect>
            //     <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            //       Image cap
            //     </text>
            //   </svg>
            //   <ul classNameName="list-group list-group-flush">
            //     <li classNameName="list-group-item">
            //       Number of Rooms: {house.number_of_rooms}
            //     </li>
            //     <li classNameName="list-group-item">View Day: {house.view_day}</li>
            //   </ul>
            // </div>
          ))}
    </>
  );
}
export default Home;

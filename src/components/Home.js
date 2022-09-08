import React from 'react'

function Home() {
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
                {' '}
                <header class="masthead">
                  <div class="container px-4 px-lg-5 h-100">
                    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                      <div class="col-lg-10 align-self-end">
                        <h1 class="font-weight-bold">
                          <span>🏠</span>WELCOME TO OUR HOMES<span>🏠</span>
                        </h1>
                        <hr class="divider" />
                      </div>
                      <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">
                          "When one door closes,buy another one and open it
                          yourself 🔑 "
                        </p>
                        <div class="dropdown">
                          <button
                            class="btn btn-primary"
                            type="button" >
                            Gallery
                          </button>
                        </div>

                        {/* <a class="btn btn-primary btn-xl" href="#about">
                          log-in here
                        </a> */}
                      </div>
                    </div>
                  </div>
                </header>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home

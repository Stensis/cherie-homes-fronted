import React from 'react'

function Home() {
  return (
    <>
      <div className="home">
        <div className="card bg-dark text-white border-0">
          <img
            src="https://wallpaperaccess.com/full/1700222.jpg"
            className="card-img"
            alt="Background"
            height="1000px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title  display-3 fw-bolder mb-0">
                {' '}
                <header class="masthead">
                  <div class="container px-4 px-lg-5 h-100">
                    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                      <div class="col-lg-10 align-self-end">
                        <h1 class="font-weight-bold">NEED A HOME?</h1>
                        <hr class="divider" />
                      </div>
                      <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">
                          YOU HAVE THE RIGHT PLACE
                        </p>
                        <a class="btn btn-primary btn-xl" href="#about">
                          sign-up here
                        </a>
                        <br></br>
                        <a class="btn btn-primary btn-xl" href="#about">
                          log-in here
                        </a>
                      </div>
                    </div>
                  </div>
                </header>
              </h5>
              <p className="card-text lead fs-2"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home

import React from 'react'

const Home = () => {
  return (
    <div className='homepage'>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-mdb-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}} >
    <div className="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="d-block w-100" alt="Wild Landscape"/>
      <div className="carousel-caption d-none d-md-block">
      <div className="image">
        <img className='fadeimg' src='https://media.istockphoto.com/videos/pink-dust-falling-onto-a-black-surface-and-creating-a-female-gender-video-id1269886110?s=640x640'></img>
      </div>  
        <div>
      <h2>PRO</h2>
      </div>
      <div className='buttons'>
      <button type="button" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Courses</button>
<button type="button" className="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">Topics</button>
<button type="button" className="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark">Authors</button>
      </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100" alt="Camera"/>
      <div className="carousel-caption d-none d-md-block">
      <div className="image">
        <img className='fadeimg' src='https://media.istockphoto.com/videos/pink-dust-falling-onto-a-black-surface-and-creating-a-female-gender-video-id1269886110?s=640x640'></img>
      </div>  
        <div>
      <h2>PRO</h2>
      </div>
      <div className='buttons'>
      <button type="button" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Courses</button>
<button type="button" className="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">Topics</button>
<button type="button" className="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark">Authors</button>
      </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="Exotic Fruits"/>
      <div className="carousel-caption d-none d-md-block">
      <div className="image">
        <img className='fadeimg' src='https://media.istockphoto.com/videos/pink-dust-falling-onto-a-black-surface-and-creating-a-female-gender-video-id1269886110?s=640x640'></img>
      </div>  
        <div>
      <h2>PRO</h2>
      </div>
      <div className='buttons'>
      <button type="button" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Courses</button>
<button type="button" className="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">Topics</button>
<button type="button" className="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark">Authors</button>
      </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )

}

export default Home;
import React from 'react'
import Education from './Education'
import TechnicalSkills from './TechnicalSkills'
import WorkExperience from './WorkExperience'

export default function Home() {
  return (
  <div >
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height:'600px'}} >
    <div className="carousel-item active" >
      <img src="Profile2.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block" style={{padding:'120px'}}>
        <h5 >Shivangi Gupta</h5>
        <p>GIS Developer at TCS</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="Profile2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{padding:'120px'}}>
        <h5>Shivangi Gupta</h5>
        <p>A girl, highly motivated towards technology and innovation, working as a GIS Developer in TCS Limited, living in a city called "Banda" of Uttar Pradesh (India).</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="Profile2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{padding:'120px'}}>
        <h5>Shivangi Gupta</h5>
        <p>Beleive in yourself. beacuse you are the hero of your life</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>

</div>

  )
}

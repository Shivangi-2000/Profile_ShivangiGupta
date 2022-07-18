import React from 'react'

export default function Home() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style={{height:'600px'}} >
    <div class="carousel-item active" >
      <img src="Profile2.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block" style={{padding:'120px'}}>
        <h5>Shivangi Gupta</h5>
        <p>GIS Developer at TCS</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="Profile2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{padding:'120px'}}>
        <h5>Shivangi Gupta</h5>
        <p>A girl, highly motivated towards technology and innovation, working as a GIS Developer in TCS Limited, living in a city called "Banda" of Uttar Pradesh (India).</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="Profile2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{padding:'120px'}}>
        <h5>Shivangi Gupta</h5>
        <p>Beleive in yourself. beacuse you are the hero of your life</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

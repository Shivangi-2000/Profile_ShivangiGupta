import React from 'react'
import { Link } from 'react-router-dom'

export default function AwardsHonors() {
  return (
    <div id='scrollspyHeading5'>
      <nav className="navbar navbar-expand-lg  bg-secondary">
          <div className="container-fluid ">
            <Link className="nav-link text-white" to='/' title="Shivangi Gupta">Trainings &amp; Certifications</Link>      
          </div> 
        </nav><br></br>
        <h1 id='quoat'>Trainings &amp; Certifications</h1>
            <hr/>
      <div className='row'>        
        <div class="card col-md-3" style={{ border:"none"}}>
          <img src="linkedin.jpg" class="img-thumbnail card-img-top" style={{height:"16rem"}} alt="..." />
          <div class="card-body">
            <p class="card-text" id='quoat1'><h5>JavaScript Essential Training &amp; Certification</h5><br></br>LinkedIn Jul 2022</p>
          </div>
        </div> 
        <div class="card col-md-3" style={{ border:"none"}}>
          <img src="linkedin.jpg" class="img-thumbnail card-img-top" style={{height:"16rem"}} alt="..." />
          <div class="card-body">
            <p class="card-text" id='quoat1'><h5>React JS Training &amp; Certification</h5><br></br>LinkedIn Aug 2022</p>
          </div>
        </div>
        <div class="card col-md-3" style={{ border:"none"}}>
          <img src="internshala.jpg" class="img-thumbnail card-img-top" style={{height:"16rem"}} alt="..." />
          <div class="card-body">
            <p class="card-text" id='quoat1'><h5>Web development Training &amp; Certification</h5><br></br>Internshala Jun 2019 - jul 2019</p>
          </div>
        </div>  
        <div class="card col-md-3" style={{ border:"none"}}>
          <img src="internshala.jpg" class="img-thumbnail card-img-top" style={{height:"16rem"}} alt="..." />
          <div class="card-body">
            <p class="card-text" id='quoat1'><h5>Programming in Python Training &amp; Certification</h5><br></br>Internshala Jun 2019 - jul 2019</p>
          </div>
        </div>
        <div class="card col-md-3" style={{ border:"none"}}>
          <img src="nptel.jpg" class="img-thumbnail card-img-top" style={{height:"16rem"}} alt="..." />
          <div class="card-body">
            <p class="card-text" id='quoat1'><h5>C Programming Training/Course &amp; Certification</h5><br></br>NPTEL Jan 2019 - April 2019</p>
          </div>
        </div> 
          
        <div class="card col-md-3" style={{ border:"none"}}>
          <img src="internshala.jpg" class="img-thumbnail card-img-top" style={{height:"16rem"}} alt="..." />
          <div class="card-body">
            <p class="card-text" id='quoat1'><h5>Machine Learning Training &amp; Certification</h5><br></br>Internshala may 2020 - jun 2020</p>
          </div>
        </div>          
        <div class="card col-md-3" style={{ border:"none"}}>
          <img src="OIP.jpg" class="img-thumbnail card-img-top" style={{height:"16rem"}} alt="..." />
          <div class="card-body">
            <p class="card-text" id='quoat1'><h5>Qualifying Round 1 of National Engineering Olympiad 2.0 Certification</h5><br></br>National Engineering Olympiad Feb 2020</p>
          </div>
        </div>           
        <div class="card col-md-3" style={{ border:"none"}}>
          <img src="rec.jpg" class="img-thumbnail card-img-top" style={{height:"16rem"}} alt="..." />
          <div class="card-body">
            <p class="card-text" id='quoat1'><h5>Participation in National Level Hackathon Certification</h5><br></br>Rajkiya Engineering College, Banda Sep 2019</p>
          </div>
        </div>
        </div>
    </div>
  )
}

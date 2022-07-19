import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function WorkExperience() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-secondary ">
    <div className="container-fluid ">
      <Link className="nav-link text-white" to='/' title="Shivangi Gupta">Work Experience</Link>      
    </div>
  </nav>
  <h1 id='heading'>Work Experience</h1>
  <p id='subHeading'>Experience comes from practice</p>
  <br></br>

  <div className='row'>
    <div className='col-md-6' id='animate'>
        <div className="card" >
          <img src="TCS.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 id='exp'>GIS Developer, TCS India</h2>
            <h4 id='expt'>Oct 2021 – Present</h4>
            <p className="card-text" id='quoat'>Working on a Project "Hazard awarness &amp; Warning Center" as GIS Developer at Tata Consultancy Sevices Limited</p>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className="card" >
          <img src="Novelvox.png" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h3 id='exp'>Software Developer Intern, Novelvox Private Limited</h3>
            <h4 id='expt'>June 2021 - Sept 2021</h4>
            </div>
      </div>
    </div>
  </div><br></br>
  <p id='subHeading'>Life is not about knowing yourself. Life is about creating yourself........... </p>
  </div>
  )
}

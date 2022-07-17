import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-secondary ">
    <div className="container-fluid ">
      <Link className="nav-link text-white" to='/' title="Shivangi Gupta">Shivangi Gupta</Link>      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to='/workexperience' title="Work Experience">Work Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/technicalskills' title="Technical Skills">Technical Skills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white"  to='/education' title="Education">
              Education
            </Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/awardshonors' title="Awards &amp; honor">Awards &amp; honors</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/careerhighlight'  title="Career Hightlights">Career Highlights</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/projects'  title="Projects">Projects</Link>
          </li>
        </ul>
        <Link className="nav-link text-white" to='/contactdetails'  title="Contact Details">Contact Details</Link>
      </div>
    </div>
  </nav></div>
  )
}

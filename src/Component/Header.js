import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-secondary ">
    <div className="container-fluid ">
      <Link className="nav-link text-white" to='/'>Shivangi Gupta</Link>      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to='/workexperience'>Work Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/technicalskills'>Technical Skills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white"  to='/education'>
              Education
            </Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/awardshonors'>Awards and honors</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/careerhighlight'>Career Highlight</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/projects'>Projects</Link>
          </li>
        </ul>
        <Link className="nav-link text-white" to='/contactdetails'>Contact Details</Link>
      </div>
    </div>
  </nav></div>
  )
}

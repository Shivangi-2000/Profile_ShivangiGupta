import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router'
import Graduation from './Graduation'
import Inter from './Inter'
import Highschool from './Highschool'

export default function Education() {
  return (
    <div ><nav className="navbar navbar-expand-lg bg-secondary ">
    <div className="container-fluid ">
      <Link className="nav-link text-white" to='/' title="Shivangi Gupta">Education</Link>      
    </div>
 </nav>
    <Graduation/>
    <Inter/>
    <Highschool />
    </div>
    
  )
}

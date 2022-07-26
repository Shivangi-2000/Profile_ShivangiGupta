import React from 'react'
import { Link } from 'react-router-dom'
import TechStack from './TechStack'

export default function TechnicalSkills() {
  return (
    <div id='scrollspyHeading2'>
      <nav className="navbar navbar-expand-lg bg-secondary ">
        <div className="container-fluid ">
          <Link className="nav-link text-white" to='/' title="Shivangi Gupta">Technical Skills</Link>      
        </div>
     </nav>
     <br></br>
        <h2 id='quoat'>Tech Stack</h2>
        <hr/>
            <ul class="a">
            <li>React JS</li>
            <li>JAVA</li>
            <li>Data Structure</li>
            <li>Javascript</li>
            <li>C++</li>
            <li>MYSql</li>
            <li>Web designing/development</li>
            <li>Python</li>          
            </ul>
     
   
  </div>
  )
}

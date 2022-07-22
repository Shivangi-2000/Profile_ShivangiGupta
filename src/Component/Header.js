import React from 'react'
import { Link } from 'react-router-dom'
import Education from './Education'
import Home from './Home'
import TechnicalSkills from './TechnicalSkills'
import WorkExperience from './WorkExperience'

export default function Header() {
  return (
    <>
    <nav id="navbar-example2" class="navbar navbar-expand-lg bg-secondary">
  <a class="navbar-brand text-white" href="#">Shivangi Gupta</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link text-white" href="#scrollspyHeading1">WorkExperience</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#scrollspyHeading2">TechnicalSkills</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Education</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Bachelor of Technology</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Intermediate</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Highschool</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
<Home/>
  <WorkExperience/>
  <TechnicalSkills/>
  <Education/>
  
</div>
</>
  )
}

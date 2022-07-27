import React from 'react'
import { Link } from 'react-router-dom'
import AwardsHonors from './AwardsHonors'
import Education from './Education'
import Home from './Home'
import Projects from './Projects'
import TechnicalSkills from './TechnicalSkills'
import TechStack from './TechStack'
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
    <li class="nav-item">
      <a class="nav-link text-white" href="#scrollspyHeading3">Education</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#scrollspyHeading4">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#scrollspyHeading5">Trainings &amp; Certifications</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#scrollspyHeading6">Coding Profiles</a>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
  <Home/>
  <WorkExperience/>
  <TechnicalSkills/>
  <Education/>
  <Projects/>
  <AwardsHonors/>
  <TechStack/>
</div>
</>
  )
}

/*
1.)npm i @emailjs/browser
2.)npm i @fortawesome/free-brands-svg-icons
3.)npm i @fortawesome/free-solid-svg-icons 
4.)npm i @fortawesome/react-fontawesome
5.)npm i animate.css
6.)npm i gsap trial
7.)npm i loaders.css
8.)npm i react-leaflet
9.)npm i react-loaders
10.) npm i react-router-dom
11.)npm i sass
*/

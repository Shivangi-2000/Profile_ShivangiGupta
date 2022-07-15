import React from 'react'

export default function Header() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-secondary ">
    <div class="container-fluid ">
      <a class="navbar-brand text-white" href="#" >Shivangi Gupta</a>      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Work Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Technical Skills</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Education
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Graduation</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Intermediate</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">High School</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Awards and honors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Career Highlight</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Projects</a>
          </li>
        </ul>
        <a class="nav-link text-white" href="#">Contact Details</a>
      </div>
    </div>
  </nav></div>
  )
}

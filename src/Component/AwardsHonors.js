import React from 'react'
import { Link } from 'react-router-dom'

export default function AwardsHonors() {
  return (
    <div id='scrollspyHeading5'>
      <nav className="navbar navbar-expand-lg  bg-secondary">
          <div className="container-fluid ">
            <Link className="nav-link text-white" to='/' title="Shivangi Gupta">AwardsHonors</Link>      
          </div> 
        </nav>
      <div className='row'>        
        <div class="card col-md-4" style={{width: "18rem;"}}>
          <img src="nptel.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div> 
        <div class="card col-md-4" style={{width: "18rem;", height: "18em;"}}>
          <img src="OIP.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card col-md-4" style={{width: "18rem;"}}>
          <img src="rec.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card col-md-4" style={{width: "18rem;"}}>
          <img src="internshala.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>      
      </div>
    </div>
  )
}

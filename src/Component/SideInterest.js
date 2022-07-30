import React from 'react'
import { Link } from 'react-router-dom'
export default function SideInterest() {
  return (
    <div id='scrollspyHeading8'>
        <nav className="navbar navbar-expand-lg  bg-secondary">
          <div className="container-fluid ">
            <Link className="nav-link text-white" to='/' title="Shivangi Gupta">Other Interest</Link>      
          </div> 
        </nav>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Education() {
  return (
    <div id='scrollspyHeading3'>
        <nav className="navbar navbar-expand-lg  bg-secondary">
          <div className="container-fluid ">
            <Link className="nav-link text-white" to='/' title="Shivangi Gupta">Education</Link>      
          </div> 
        </nav>
        <div id='body1'>
          <div class="main">
            <h1 id='quoat'>Educational Information</h1>
            <hr/>
                <div class="row">
                    <div class="col-md-2 content">              
                        <img src="Inter.jpeg" alt="Inter" style={{width:"100%"}} className='zoom'/>
                    </div>
                    <div class="col-md-10 content" >
                        <h5 id='quoat1'>Intermediate Education (2017)</h5>
                        <p id='quoat1'>Adarsh Inter College <br></br>Banda, Uttar Pradesh<br></br>81%</p>
                    </div> <hr/>              
                    <div class="col-md-2 content">                
                      <img src="Hschool.jpg" alt="HighSchool" style={{width:"100%"}} className='zoom'/>
                    </div>
                    <div class="col-md-10 content" >
                        <h5 id='quoat1'>High School Education (2015)</h5>
                        <p id='quoat1'>Adarsh Inter College <br></br>Banda, Uttar Pradesh<br></br>82%</p>              
                    </div><hr/>
                    <div className='row'>              
                    <div class="col-md-2 content">                 
                        <img src="btech.jpg" alt="Btech" style={{width:"100%"}} className='zoom'/>
                    </div>                  
                    <div class="col-md-10 content">                        
                        <h5 id='quoat1'>Bachelor of Technology (2017 - 2021)</h5>
                        <p id='quoat1'>Rajkiya Engineering College <br></br>Banda, Uttar Pradesh<br></br>8.01 CGPA <b><u>(Honors)</u></b></p>
                    </div><hr/> 
                </div> 
                            

            </div>
        </div>
        </div>
    </div>
    
  )
}

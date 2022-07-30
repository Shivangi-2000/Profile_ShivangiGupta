import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div id='scrollspyHeading6'>
      <nav className="navbar navbar-expand-lg  bg-secondary">
          <div className="container-fluid ">
            <Link className="nav-link text-white" to='/' title="Shivangi Gupta">Coding Profiles</Link>      
          </div> 
        </nav><br></br>
        <h1 id='heading'>Coding Skills</h1>
     <p id='subHeading'>We are not born with skills but we can develop it by hardwork</p>
     
      <div className='row'id='quoat'>
        <div className='card col-md-3'>
          <div class="container1">
              <img src="Java1.png" alt="Avatar" class="image" style={{width:"19rem" ,height:"16rem"}}/>
              <div class="overlay">
                <div class="text">5 Star Badge in java on<br></br> "Hackerrank" Coding Plateform
                <br></br>
                <a href='https://www.hackerrank.com/shivangiguptaoc1'><button class="btn btn-secondary">Hackerrank Profile</button></a></div>
              </div>
          </div>
        </div>
      
        <div className='card col-md-3'>
          <div class="container1">
              <img src="DS.png" alt="Avatar" class="image" style={{width:"19rem" ,height:"16rem"}}/>
              <div class="overlay">
                <div class="text">2 Star Badge in Data Structure on <br></br>"Hackerearth" Coding Plateform
                <br></br>
                <a href='https://www.hackerearth.com/@shivangi722'><button class="btn btn-secondary">Hackerearth Profile</button></a></div>
              </div>
          </div>
          </div>
      
   
     
          <div className='card col-md-3'>
            <div class="container1">
              <img src="Language.png" alt="Avatar" class="image" style={{width:"19rem" ,height:"16rem"}}/>
              <div class="overlay">
              <div class="text">Language Proficiency in C++ and Python on <br></br>"Hackerearth" Coding Plateform
                <br></br>
                <a href='https://www.hackerearth.com/@shivangi722'><button class="btn btn-secondary">Hackerearth Profile</button></a></div>
              </div>
          </div>
          </div>
      
        
          <div className='card col-md-3'>
          <div class="container1">
              <img src="solved.png" alt="Avatar" class="image" style={{width:"19rem" ,height:"16rem"}}/>
              <div class="overlay">
              <div class="text">Solved Problems on <br></br>"Leetcode" Coding Plateform
                <br></br>
                <a href='https://leetcode.com/Shivangi_2000_Gupta/'><button class="btn btn-secondary">Leetcode Profile</button></a></div>
              </div>
          </div>
          </div>
          <div className='card col-md-3'>
        <div class="container1">
              <img src="java2.png" alt="Avatar" class="image" style={{width:"19rem" ,height:"16rem"}}/>
              <div class="overlay">
              <div class="text">Novice Badge on <br></br>"Hackerearth" Coding Plateform
                <br></br>
                <a href='https://www.hackerearth.com/@shivangi722'><button class="btn btn-secondary">Hackerearth Profile</button></a></div>
              </div>
          </div>
     </div>
        
          </div>
          
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div id='scrollspyHeading4' >
      <nav className="navbar navbar-expand-lg bg-secondary ">
        <div className="container-fluid ">
          <Link className="nav-link text-white" to='/' title="Shivangi Gupta">Projects</Link>      
        </div>
     </nav>
     <div className='container'><br></br>
        <h5 id='quoat1'>1. Accident Prone Situation prediction</h5><hr/>
          <p id='quoat1'>This is my final year major project. We have perfomed 
          complete development life cycle of machine learning model. As often road Accidents happens because of drivers
          carelessness we have developed this model. this moldel helps in detecting the
          activities(like yawing, talking, moving head, drowsiness, pulse rate increament or decreament) of the driver by face recognition library
           and landmark techniques. And then alarm him to be careful.<br></br>
          <b>Languages used:</b> Python</p><br></br>
        <h5 id='quoat1'>2. Canteen Management Project</h5><hr/>
          <p id='quoat1'>This project help in management in the cafeteria.This is a responsive website which makes easier 
          to see the menu of the cafeteria and place an order and it provides an easy way for payment.<br></br><b>Languages used:</b> Php, HTML, CSS, bootstrap, MySQL</p>
      </div>
    </div>
  )
}

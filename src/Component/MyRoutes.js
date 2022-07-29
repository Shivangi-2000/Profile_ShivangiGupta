import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header';
import WorkExperience from './WorkExperience';
import TechnicalSkills from './TechnicalSkills';
import AwardsHonors from './AwardsHonors';
import Education from './Education';
import CareerHighlight from './CareerHighlight';
import Projects from './Projects';
import ContactDetails from './ContactDetails';
import Home from './Home';


export default function MyRoutor() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/header" element={<Header />}/>
                    <Route path="/workexperience" element={<WorkExperience />}/>
                    <Route path="/technicalskills" element={<TechnicalSkills />}/>
                    <Route path="/awardshonors"  element={<AwardsHonors />}/>
                    <Route path="/education"  element={<Education />}/>
                    <Route path="/careerhighlight" element={<CareerHighlight />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/contactdetails" element={<ContactDetails />}/>
                     
                </Routes>
        </BrowserRouter>
    </div>
  )
}

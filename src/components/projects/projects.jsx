import React from 'react'
import "../projects/projects.scss"
import Novimg from "../../assets/novaluna.png"
import Eleximg from "../../assets/elexport pic.png"
import HTML5 from "../../assets/HTML5.svg"
import CSS from "../../assets/CSS.svg"
import JS from "../../assets/Javascript.png"
import Rimg from "../../assets/react2.svg"

function projects() {

  return (
    <section id = "projects"> 
    <h1 id = "project-heading">Projects</h1>
    <section className = "project-grid">
        <div className='card'> 
            <img src = {Novimg} alt = "Novaluna Website IMG"/>
            <h2>Novaluna Technologies</h2>
            <>
                <span>Javascript</span>
                <span>CSS</span>
                <span>HTML</span>
            </>
            <p>Collaborated on the development and design of the Novaluna Technologies website.</p>
            <a href="https://www.novalunatech.com/" target="_blank" rel="noopener noreferrer" className="live-view-btn">
                Live View
            </a>
        </div>
        <div className='card'> 
            <img src = {Eleximg} alt = "Elexport Website Image"/>
            <h2>Elexport Overseas</h2>
            <>
                <span>Javascript</span>
                <span>CSS</span>
                <span>HTML</span>
            </>
            <p>Designed and Managed the Whole Team for successful completion of the project.</p>
            <a href="https://www.elexportoverseas.com/" target="_blank" rel="noopener noreferrer" className="live-view-btn">
                Live View
            </a>
        </div>
        <div className='card'> 
            <img src = {Novimg} alt = "Novaluna Website IMG"/>
            <h2>Portfolio April 2025</h2>
            <>
                <span>Javascript</span>
                <span>CSS</span>
                <span>HTML</span>
            </>
            <p>My portfolio website, you're probably looking at right now.</p>
            <a className='live-view-btn' > Stay up to Date</a>
        </div>
    </section>
    <div className='symbols'>
        <img src = {HTML5} alt = "HTML5"/>
        <img src = {CSS} alt = "CSS"/>
        <img src = {JS} alt = "Javascript"/>
        <a className='name-logo'>
            <h7>Reactjs</h7> 
            <span><img id = "reactimgshit" src = {Rimg} alt = "React"/></span>
         </a>
    </div>
    <div className='beyond-code'>
        <h1>Beyond Code</h1>
        <p>When I’m not designing or building websites, I spend time playing badminton, or exploring new interests. I enjoy meaningful work, whether it’s creating, helping, or just experiencing something different.</p>
    </div>
    </section>
  )
}

export default projects
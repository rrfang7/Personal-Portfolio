import React from 'react'
import ProjectItem from '../components/ProjectItem'
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"
import proj3 from "../assets/proj3.png"
import "./Project.css"

function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className='projectList'>
      <ProjectItem name ="Calculator" image = {proj1}/>
      <ProjectItem name="E-commerce" image = {proj2}/>
      <ProjectItem name="Quiz App" image = {proj3}/>
      </div>
    </div>
  )
}

export default Projects
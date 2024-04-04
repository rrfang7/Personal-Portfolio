import React from 'react'
import ProjectItem from '../components/ProjectItem'
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"
import proj3 from "../assets/proj3.png"
import { projectList } from '../helpers/projectLists'
import "./Project.css"

function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className='projectList'>
      {projectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={project.image}/>
      })}
      </div>
    </div>
  )
}

export default Projects
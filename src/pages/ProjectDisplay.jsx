import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/projectLists';
import { FaGithub } from "react-icons/fa";
import "./ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <p>
            <b>Skills:</b> {project.skills}
        </p>
        <FaGithub />
    </div>
  )
}

export default ProjectDisplay
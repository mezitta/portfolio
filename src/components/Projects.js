import React from 'react'

import './Projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className="projects-body">
            <ProjectCard 
                picture="picture"
                link="link"
                description="desc"
            />
            <ProjectCard 
                picture="picture"
                link="link"
                description="desc"
            />
            <ProjectCard 
                picture="picture"
                link="link"
                description="desc"
            />
        </div>
    )
}

export default Projects
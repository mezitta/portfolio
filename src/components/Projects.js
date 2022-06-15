import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Projects.css'
import ProjectCard from './ProjectCard'
import { huskyDesc, lbfeDesc, portDesc } from './ProjDescs.js'

const Projects = () => {
    return (
        <Container fluid className="projects-body">
            <Row>
                <Col xs={12} md={4}>
                    <ProjectCard 
                        picture = "picture"
                        link = "https://github.com/mezitta/Husky-Review"
                        title = "Husky Review"
                        description = { huskyDesc } 
                    />
                </Col>
                <Col xs={12} md={4}>
                    <ProjectCard 
                        picture = "picture"
                        link = "https://github.com/MTUHIDE/little-brothers"
                        title = "LBFE"
                        description = { lbfeDesc }
                    />
                </Col>
                <Col xs={12} md={4}>
                    <ProjectCard 
                        picture = "picture"
                        link = "https://github.com/mezitta/portfolio"
                        title = "Portfolio"
                        description = { portDesc }
                    />
                </Col>
                
            </Row>
            
        </Container>
    )
}

export default Projects
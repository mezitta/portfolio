import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <Container fluid className="projects-body">
            <Row>
                <Col xs={12} md={4}>
                    <ProjectCard 
                        picture="picture"
                        link="https://github.com/mezitta"
                        description="desc"
                    />
                </Col>
                <Col xs={12} md={4}>
                    <ProjectCard 
                        picture="picture"
                        link="https://github.com/mezitta"
                        description="desc"
                    />
                </Col>
                <Col xs={12} md={4}>
                    <ProjectCard 
                        picture="picture"
                        link="https://github.com/mezitta"
                        description="desc"
                    />
                </Col>
                
            </Row>
            
        </Container>
    )
}

export default Projects
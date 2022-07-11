import React from 'react'
import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

import './Projects.css'
import ProjectCard from './ProjectCard'
import { huskyDesc, lbfeDesc, portDesc } from './ProjDescs.js'

const Projects = ({updateNav}) => {
    
    const [navState, setNavState] = useState(true)

    return (
            <motion.div className="projects"
                initial = {{width: 0, opacity: 0}}
                animate = {{width: "100%", opacity: 1}}
                exit = {{x: window.innerWidth, transition: {duration: 0.1}}}
            >
                <Container fluid className="projects-body">
                    <Row>
                        <Col xs={12} md={4}>
                            <ProjectCard 
                                picture = "picture"
                                link = "https://github.com/mezitta/Husky-Review"
                                title = "Husky Review"
                                description = { huskyDesc }
                                navState = {navState => setNavState(navState)}
                                updateNav = {updateNav} 
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <ProjectCard 
                                picture = "picture"
                                link = "https://github.com/MTUHIDE/little-brothers"
                                title = "LBFE"
                                description = { lbfeDesc }
                                navState = {navState => setNavState(navState)}
                                updateNav = {updateNav}
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <ProjectCard 
                                picture = "picture"
                                link = "https://github.com/mezitta/portfolio"
                                title = "Portfolio"
                                description = { portDesc }
                                navState = {navState => setNavState(navState)}
                                updateNav = {updateNav}
                            />
                        </Col>
                    </Row>
                </Container>
            </motion.div>
    )
}

export default Projects
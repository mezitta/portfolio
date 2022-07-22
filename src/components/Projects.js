import React from 'react'
// import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

import './Projects.css'
import ProjectCard from './ProjectCard'
import ScrollToTop from '../scrollToTop'

import huskyRvwPic from '../assets/huskylogoyellow.png'
import backHP from '../assets/mtu_campus.png'

import lbfePic from '../assets/LBFE_LOGOV_red_upmichigan.png'
import backLbfe from '../assets/hancock.png'

import portPic from '../assets/homeshark.svg'
import backPort from '../assets/stjoe.png'

import { huskyDesc, huskyOvrw, huskyGoals, huskyImprv, lbfeDesc, lbfeOvrw, lbfeGoals, lbfeImprv, portDesc, portOvrw, portGoals, portImprv } from './ProjDescs.js'

const Projects = ({navState}) => {
    
    return (
            <motion.div className="projects"
                initial = {{width: 0, opacity: 0}}
                animate = {{width: "100%", opacity: 1}}
                exit = {{x: window.innerWidth, transition: {duration: 0.1}}}
            >
                <ScrollToTop />
                <Container fluid className="projects-body">
                    <Row>
                        <Col xs={12} md={4}>
                            <ProjectCard 
                                picture = { huskyRvwPic }
                                backPicture = { backHP }
                                link = "https://github.com/mezitta/Husky-Review"
                                title = "Husky Review"
                                description = { huskyDesc }
                                overview = { huskyOvrw }
                                goals = { huskyGoals }
                                improvements = { huskyImprv }
                                navState = { navState }
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <ProjectCard 
                                picture = { lbfePic }
                                backPicture = { backLbfe }
                                link = "https://github.com/MTUHIDE/little-brothers"
                                title = "LBFE"
                                description = { lbfeDesc }
                                overview = { lbfeOvrw }
                                goals = { lbfeGoals }
                                improvements = { lbfeImprv }
                                navState = { navState }
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <ProjectCard 
                                picture = { portPic }
                                backPicture = { backPort }
                                link = "https://github.com/mezitta/portfolio"
                                title = "Portfolio"
                                description = { portDesc }
                                overview = { portOvrw }
                                goals = { portGoals }
                                improvements = { portImprv }
                                navState = { navState }
                            />
                        </Col>
                    </Row>
                </Container>
            </motion.div>
    )
}

export default Projects
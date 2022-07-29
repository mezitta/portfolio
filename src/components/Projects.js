import React from 'react'
// import { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

import './Projects.css'
import ProjectCard from './ProjectCard'
import ScrollToTop from '../scrollToTop'

import huskyRvwPic from '../assets/huskylogoyellow.png'
import backHP from '../assets/mtu_campus.png'
import hrp1 from '../assets/hrp1.png'
import hrp2 from '../assets/hrp2.png'
import hrp3 from '../assets/hrp3.png'
import hrp4 from '../assets/hrp4.png'

import lbfePic from '../assets/LBFE_LOGOV_red_upmichigan.png'
import backLbfe from '../assets/hancock.png'
import lbfep1 from '../assets/lbfep1.png'
import lbfep2 from '../assets/lbfep2.png'
import lbfep3 from '../assets/lbfep3.png'
import lbfep4 from '../assets/lbfep4.png'

import ps1 from '../assets/ps1.png'
import ps2 from '../assets/ps2.png'
import ps3 from '../assets/ps3.png'
import ps4 from '../assets/ps4.png'

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
                                p1 = {hrp1}
                                p2 = {hrp2}
                                p3 = {hrp3}
                                p4 = {hrp4}
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
                                p1 = {lbfep1}
                                p2 = {lbfep2}
                                p3 = {lbfep3}
                                p4 = {lbfep4}
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
                                p1 = {ps1}
                                p2 = {ps2}
                                p3 = {ps3}
                                p4 = {ps4}
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
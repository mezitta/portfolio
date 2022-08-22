import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import { motion } from 'framer-motion'

import './Home.css'

const Home = ({desktopShark, mobileShark}) => {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isMobile, setisMobile] = useState(false)

    useEffect (() => {
        const handleResize = () =>{
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener('resize', handleResize)

        if(windowWidth <= 992) {
            setisMobile(true)
        } else {
            setisMobile(false)
        }

        return () => window.removeEventListener('resize', handleResize)
    }, [windowWidth])

    return (
        <motion.div className="home-body"
            initial = {{ opacity: 0}}
            animate = {{ opacity: 1}}
            exit = {{x: window.innerWidth, transition: {duration: 0.1}}}
        >
           <Container fluid>
               <Row className="home-row" style = {{backgroundImage: `url(${isMobile ? mobileShark: ''})`}}>
                    <Col sm={12} lg={6} className="home-left">
                        <motion.div
                           initial = {{
                           opacity: 0,
                           y: 300
                           }}

                           animate = {{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.2,
                                    delay: 0.2
                                }
                           }}>
                            <div 
                                className="home-text">
                                <h2>Michael Zitta</h2>
                                <h1 className="role">Front-End Web Developer</h1>
                                <h3>Howdy! I am a front-end developer that focuses on creating responsive web applications</h3>
                            </div>

                            <Row className="button-row">
                                <Col xs={6} md={3} className="desktop">
                                    <NavLink to="/projects"><button className="project-button">Portfolio</button></NavLink>
                                </Col>
                                <Col className="desktop">
                                    <NavLink to="/contact"><button className="project-button">Hire me</button></NavLink>
                                </Col>
                                <Col className="mobile">
                                    <NavLink to="/projects"><button className="project-button">Portfolio</button></NavLink>
                                    <NavLink to="/contact"><button className="project-button">Hire me</button></NavLink>
                                </Col>
                            </Row>
                            
                            <Row className="social-links">
                                <Col className="social-link" xs={2} sm={1}><a target="_blank" rel="noreferrer" href="https://github.com/mezitta"><FontAwesomeIcon icon={faGithub} /></a></Col>
                                <Col className="social-link" xs={2} sm={1}><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-zitta/"><FontAwesomeIcon icon={faLinkedin} /></a></Col>
                            </Row>
                        </motion.div>
                    </Col>
                    
                    <Col sm={6}  className="home-right">
                        <motion.div className="home-right-img" 
                            style = {{ backgroundImage: `url(${desktopShark})`}}
                            
                            initial = {{
                                opacity: 0,
                                x: 400
                            }}

                            animate = {{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.2,
                                    delay: 0.55
                                }
                            }}
                        >
                        </motion.div>
                    </Col>
               </Row>
           </Container>
        </motion.div>
    )
}

export default Home
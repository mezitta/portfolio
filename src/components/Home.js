import React from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import largeShark from '../assets/homeshark.svg'

import './Home.css'

const Home = () => {
    return (
        <div className="home-body">
           <Container fluid>
               <Row className="home-row">
                    <Col sm={12} lg={6} className="home-left">
                        <div className="home-text">
                            <div>Michael Zitta</div>
                            <div className="role">Front End Web Developer</div>
                            <div>Howdy! I am a front end developer that focuses on creating responsive web applications</div>
                        </div>

                        <Row className="button-row">
                            <Col>
                                <NavLink to="/projects"><button className="project-button">Portfolio</button></NavLink>
                                <NavLink to="/contact"><button className="project-button">Hire me</button></NavLink>
                            </Col>
                        </Row>
                    
                        <Row className="social-links">
                            <Col xs={2} sm={1}><a target="_blank" rel="noreferrer" href="https://github.com/mezitta"><FontAwesomeIcon icon={faGithub} /></a></Col>
                            <Col xs={2} sm={1}><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-zitta/"><FontAwesomeIcon icon={faLinkedin} /></a></Col>
                        </Row>
                    </Col>

                    <Col sm={6} className="home-right" />
               </Row>
           </Container>
        </div>
    )
}

export default Home
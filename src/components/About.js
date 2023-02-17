import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

import Resume from '../assets/2022 Resume.pdf'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVuejs } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faBootstrap } from "@fortawesome/free-brands-svg-icons"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faJava } from "@fortawesome/free-brands-svg-icons"
import { faC } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';

import './About.css'

const About = () => {
    return (
        <motion.div className="about-body"
            initial = {{width: 0, opacity: 0}}
            animate = {{width: "100%", opacity: 1, transition: {duration: 0.2}}}
            exit = {{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <Container fluid>
                <Row>
                    <Col xs={12} lg={6} className="about-section">
                        <Row className="about-row">
                        <motion.div initial = {{opacity: 0}} animate = {{opacity: 1, transition: {duration: 0.2, delay: 0.1}}}>
                            <Col xs={12} className="name-tag">
                                
                                <div className="tag-header">
                                    <h1>HELLO</h1>
                                    <h3>My Name Is</h3>
                                </div>
                                <div className="tag-body" >
                                    <p>
                                        Howdy! My name is Michael Zitta and I am currently a senior at Michigan Technological University that is majoring in computer science.
                                        I focus on front-end development and creating responsive web applications. In my free time I like to try and find projects to work on that
                                        can help me improve as a developer. Cooking and playing games are also activities that I enjoy.
                                    </p>
                                </div>
                                
                            </Col>
                            </motion.div>
                            <Col xs={12} className="about-resume">
                                <h2>Check Out My Resume</h2>
                                <a target="_blank" rel="noreferrer" href={Resume}><button>Resume</button></a>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} lg={6} className="about-section">
                        <ul>
                            <h2 className="skill-header">Skills</h2>
                            <Row className="skills-row">
                                <Col xs={6} md={4} className="skill-col skill-left">
                                    <div className="skill">
                                        <div className="skill-img"><FontAwesomeIcon icon={faVuejs} /></div>
                                        <li><p>Vue</p></li>
                                    </div>
                                </Col>
                                <Col xs={6} md={4} className="skill-col">
                                    <div className="skill">
                                        <div className="skill-img"><FontAwesomeIcon icon={faReact} /></div>
                                        <li><p>React</p></li>
                                    </div>
                                </Col>
                                <Col xs={6} md={4}className="skill-col skill-right">
                                    <div className="skill">
                                        <div className="skill-img"><FontAwesomeIcon icon={faBootstrap} /></div>
                                        <li><p>Bootstrap</p></li>
                                    </div>
                                </Col>
                                <Col xs={6} md={4} className="skill-col skill-left">
                                    <div className="skill">
                                        <div className="skill-img">
                                            <FontAwesomeIcon icon={faCss3Alt} className="frontEnd" id="fe1"/>
                                            <FontAwesomeIcon icon={faJs} className="frontEnd" id="fe2"/>
                                            <FontAwesomeIcon icon={faHtml5} className="frontEnd" id="fe3"/>
                                        </div>
                                        <li><p>Front-End</p></li>
                                    </div>
                                </Col>
                                <Col xs={6} md={4} className="skill-col">
                                    <div className="skill">
                                        <div className="skill-img"><FontAwesomeIcon icon={faJava} /></div>
                                        <li><p>Java</p></li>
                                    </div>
                                </Col>
                                <Col xs={6} md={4} className="skill-col skill-right">
                                    <div className="skill">
                                        <div className="skill-img"><FontAwesomeIcon icon={faC} /></div>
                                        <li><p>C</p></li>
                                    </div>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default About
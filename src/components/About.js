import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Resume from '../assets/mezitta2022Resume.pdf'

import './About.css'

const About = () => {
    return (
        <div className="about-body">
            <Container fluid>
                <Row className="about-row">
                    <Col xs={12} sm={6} className="name-tag">
                        <div className="tag-header">
                            <h1>HELLO</h1>
                            <h3>My Name Is</h3>
                        </div>
                        <div className="tag-body">
                            <p>Howdy! My name is Michael Zitta and I am currently a senior at Michigan Technological University that is majoring in computer science.
                            I focus on Front-End development and creating responsive web applications.
                            In my free time I like to try and find projects to work on that can help me improve as a developer.
                            Cooking and playing games with friends are also activities that I enjoy.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="about-resume">
                        <h2>Check Out My Resume</h2>
                        <a target="_blank" rel="noreferrer" href={Resume}><button>Resume</button></a>
                    </Col>
                </Row>
                <h2>Skills</h2>
                <ul>
                    <Row className="skills-row">
                        <Col xs={6} md={4} className="skill-col skill-left">
                            <div className="skill">
                                <div className="skill-img"></div>
                                <li><p>Vue</p></li>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="skill-col">
                            <div className="skill">
                                <div className="skill-img"></div>
                                <li><p>React</p></li>
                            </div>
                        </Col>
                        <Col xs={6} md={4}className="skill-col skill-right">
                            <div className="skill">
                                <div className="skill-img"></div>
                                <li><p>Bootstrap</p></li>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="skill-col skill-left">
                            <div className="skill">
                                <div className="skill-img"></div>
                                <li><p>Front-End</p></li>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="skill-col">
                            <div className="skill">
                                <div className="skill-img"></div>
                                <li><p>Java</p></li>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="skill-col skill-right">
                            <div className="skill">
                                <div className="skill-img"></div>
                                <li><p>C</p></li>
                            </div>
                        </Col>
                    </Row>
                </ul>
                <Row className="about-resume">
                    
                </Row>
            </Container>
        </div>
    )
}

export default About
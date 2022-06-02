import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Resume from '../assets/mezitta2022Resume.pdf'

import './About.css'

const About = () => {
    return (
        <div className="about-body">
            <Container>
                <Row>
                    <Col>
                        About
                        I am currently a senior at Michigan Technological University that is majoring in computer science.
                        I focus on Front-End development and creating responsive web applications.
                        In my free time I like to try and find projects to work on that can help me improve as a developer.
                        Cooking and playing games with friends are also activities that I enjoy.
                    </Col>
                </Row>
                <Row>
                    Skills
                    <Col>
                        Vue
                        React
                        Bootstrap
                    </Col>
                    <Col>
                        HTML 
                        CSS
                        Javascript 
                    </Col>
                    <Col>
                        Java
                        C
                        Photoshop
                    </Col>
                </Row>
                <Row>
                    <a target="_blank" rel="noreferrer" href={Resume}>Resume</a>
                </Row>
            </Container>
        </div>
    )
}

export default About
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
                    <Col>
                        About
                        I am currently a senior at Michigan Technological University that is majoring in computer science.
                        I focus on Front-End development and creating responsive web applications.
                        In my free time I like to try and find projects to work on that can help me improve as a developer.
                        Cooking and playing games with friends are also activities that I enjoy.
                    </Col>
                </Row>
                Skills
                <ul>
                    <Row className="skills-row">
                        <Col><li>Vue</li></Col>
                        <Col><li>React</li></Col>
                        <Col><li>Bootstrap</li></Col>
                    </Row>
                    <Row className="skills-row">
                        <Col><li>HTML</li></Col>
                        <Col><li>CSS</li></Col>
                        <Col><li>Javascript</li></Col>
                    </Row>
                    <Row className="skills-row">
                        <Col><li>Java</li></Col>
                        <Col><li>C</li></Col>
                        <Col><li>Photoshop</li></Col>
                    </Row>
                </ul>
                <Row>
                    <a target="_blank" rel="noreferrer" href={Resume}>Resume</a>
                </Row>
            </Container>
        </div>
    )
}

export default About
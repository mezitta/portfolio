import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import './ProjectModal.css'

const ProjectModal = ({p1, p2, p3, p4, title, link, modalState, navState, overview, goals, improvements}) => {
    return (
        <div className="modalBackground">
            <Container className="modalBody">
                <Row className="btnRow">
                    <button
                        onClick={() => {modalState(false); navState(true)}}
                        className="modalBtn"
                    >
                        x
                    </button>
                 </Row>
                <Row><h2>{title}</h2></Row>
                <Row><img src = {p1} alt = "main page"/></Row>
                <Row>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                </Row>
                <Row><img src = {p2} alt = "second"/></Row>
                <Row>
                    <h3>Goals</h3>
                    <div>
                        <ul>
                            {goals.map((goal) => {
                                return <li key = {goal}>{goal}</li>
                            })}
                        </ul>
                    </div>
                </Row>
                <Row><img src = {p3} alt = "third"/></Row>
                <Row>
                    <h3>What Could Be Better</h3>
                    <div>
                        <ul>
                            {improvements.map((improvement) => {
                                return <li key = {improvement}>{improvement}</li>
                            })}
                        </ul>
                    </div>
                </Row>
                <Row><img src = {p4} alt = "fourth"/></Row>
                <Row><a target="_blank" rel="noreferrer" href={link}>Repo</a></Row>
            </Container>
        </div>
    )
}

export default ProjectModal
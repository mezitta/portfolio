import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import './ProjectModal.css'

const ProjectModal = ({picture, title, link, modalState, navState, overview, goals, improvements}) => {
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
                <Row>{picture}</Row>
                <Row><h3>Overview</h3>{overview}</Row>
                <Row>
                    <h3>Goals</h3>
                    <ul>
                        {goals.map((goal) => {
                            return <li>{goal}</li>
                        })}
                    </ul>
                </Row>
                <Row>
                    <h3>What Could Be Better</h3>
                    <ul>
                        {improvements.map((improvement) => {
                            return <li>{improvement}</li>
                        })}
                    </ul>
                </Row>
                <Row><a target="_blank" rel="noreferrer" href={link}>Repo</a></Row>
            </Container>
        </div>
    )
}

export default ProjectModal
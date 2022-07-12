import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import './ProjectModal.css'

const ProjectModal = ({picture, title, description, link, modalState, navState}) => {
    return (
        <div className="modalBackground">
            <Container className="modalBody">
                <Row>
                    <button
                        onClick={() => {modalState(false); navState(true)}}
                        >x
                    </button>
                 </Row>
                <Row>{title}</Row>
                <Row>{picture}</Row>
                <Row>{description}</Row>
                <Row>{link}</Row>
            </Container>
        </div>
    )
}

export default ProjectModal
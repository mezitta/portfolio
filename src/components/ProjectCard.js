import React from 'react'
import './ProjectCard.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const ProjectCard = ({picture, title, description, link}) => {
    return (
        <Container fluid className="card-container">
            <Row className="proj-card">
                <Col xs={12} className="picture-box">
                    <div className="display-picture">
                        {picture}
                    </div>
                    <div className="picture-link">
                        <a target="_blank" rel="noreferrer" href={link}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </Col>
                <Col xs={12} className="desc-box">
                    <div >
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectCard
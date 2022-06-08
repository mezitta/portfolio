import React from 'react'
import './ProjectCard.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProjectCard = ({picture, description, link}) => {
    return (
        <Container fluid className="card-container">
            <Row className="proj-card">
                <Col xs={12} md={6} className="picture-box">
                    {picture}
                    {link}
                </Col>
                <Col xs={12} md={6} className="desc-box">
                    <div >
                        {description}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectCard
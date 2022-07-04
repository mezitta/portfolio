import React from 'react'
import { useState } from 'react'

import './ProjectCard.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import ProjectModal from './ProjectModal'
import { filterProps } from 'framer-motion'

const ProjectCard = ({picture, title, description, link, navState}) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
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
                        <div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        <div>
                            <button className="modalBtn"
                                onClick={() => {
                                setOpenModal(true)
                                navState(false)
                            }}>Learn More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            {openModal && <ProjectModal 
                picture = {picture}
                title = {title}
                description = {description}
                link = {link}
                modalState = {setOpenModal}
                navState = {navState}
            />}
        </div>
    )
}

export default ProjectCard
import React from 'react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import './ProjectCard.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCircleInfo} from "@fortawesome/free-solid-svg-icons"

import ProjectModal from './ProjectModal'

const ProjectCard = ({p1, p2, p3, p4, picture, backPicture, title, description, link, navState, overview, goals, improvements}) => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <Container fluid className="card-container">
                <Row className="proj-card">
                    <Col xs={12} className="picture-box" style={{ backgroundImage: `url(${backPicture})` }}>
                        <div className="display-picture" style={{ backgroundImage: `url(${picture})` }}>
                            {/* {picture} */}
                        </div>
                        <div className="picture-link">
                            <a target="_blank" rel="noreferrer" href={link}>
                                <FontAwesomeIcon icon={faGithub} className="gitIcon"/>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} className="desc-box">
                        <div className="desc-txt">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        <Row className="moreButton">
                            <button className="modalInfo"
                                onClick={() => {
                                setOpenModal(true)
                                navState(false)
                                }}>
                                 Learn More <FontAwesomeIcon icon={faCircleInfo}/>
                            </button>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
            <AnimatePresence>
                {openModal && <ProjectModal 
                    p1 = {p1}
                    p2 = {p2}
                    p3 = {p3}
                    p4 = {p4}
                    title = {title}
                    overview = {overview}
                    goals = {goals}
                    improvements = {improvements}
                    link = {link}
                    modalState = {setOpenModal}
                    navState = {navState}
                />}
            </AnimatePresence>
        </div>
    )
}

export default ProjectCard
import React from "react";
import { useEffect } from "react";
import { motion } from 'framer-motion'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import './ProjectModal.css'

const ProjectModal = ({p1, p2, p3, p4, title, link, modalState, navState, overview, goals, improvements}) => {

    useEffect(() => {
        
        function handleKeydown (event) {
            if(event.key === "Escape") {
                modalState(false)
                navState(true)
            }
        }

        window.addEventListener('keydown', handleKeydown)

        return () => {
            window.removeEventListener('keydown', handleKeydown)
        };
    });

    return (
            <motion.div 
                className="modalBackground" 
                onClick={() => {modalState(false); navState(true)}}

                initial = {{
                    opacity: 0
                }}

                animate = {{
                    opacity: 1,
                    transition: {
                        duration: 0.3
                    }
                }}

                exit = {{
                    opacity: 0,
                    transition: {
                        duration: 0.3,
                        delay: 0.1
                    }
                }}
            >
                <motion.div
                    initial = {{
                        y: -500,
                        opacity: 0
                    }}

                    animate = {{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            delay: 0.1
                        }
                    }}

                    exit = {{
                        y: -500,
                        opacity: 0,
                        transition: {
                            duration: 0.3
                        }
                    }}
                >
                    <Container className="modalBody">
                        <Row className="btnRow">
                            <button
                                onClick={() => {modalState(false); navState(true)}}
                                className="modalBtn"
                            >
                                x
                            </button>
                         </Row>
                        <Row className="projTitle"><h2 >{title}</h2></Row>
                        <Row><img src = {p1} alt = "main page"/></Row>
                        <Row>
                            <h3 className="subSection">Overview</h3>
                            <p>{overview}</p>
                        </Row>
                        <Row><img src = {p2} alt = "second"/></Row>
                        <Row>
                            <h3 className="subSection">Goals</h3>
                            <div className="modalTextArea">
                                <ul className="modalList">
                                    {goals.map((goal) => {
                                        return <li key = {goal}>{goal}</li>
                                    })}
                                </ul>
                            </div>
                        </Row>
                        <Row className="mobileRow"><img src = {p3} alt = "third" className="mobilePic"/></Row>
                        <Row>
                            <h3 className="subSection">What Could Be Better</h3>
                            <div className="modalTextArea">
                                <ul className="modalList">
                                    {improvements.map((improvement) => {
                                        return <li key = {improvement}>{improvement}</li>
                                    })}
                                </ul>
                            </div>
                        </Row>
                        <Row className="mobileRow"><img src = {p4} alt = "fourth" className="mobilePic"/></Row>
                        <Row className="repoLink">
                            <a target="_blank" rel="noreferrer" href={link}>
                                <FontAwesomeIcon icon={faGithub} className="gitIcon"/> Repo
                            </a>
                        </Row>
                    </Container>
                </motion.div>
            </motion.div>
    )
}

export default ProjectModal
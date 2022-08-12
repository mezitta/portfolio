import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './NavBar.css'

const NavBar = () => {
    return (
        <motion.div
            initial = {{
                opacity: 0
            }}

            animate = {{
                opacity: 1,
                transition: {
                    duration: 0.3,
                    delay: 0.2
                }
            }}

            exit = {{
                opacity: 0,
                transition: {
                    duration: 0.3,
                }
            }}
        >
            <Container fluid className='bar'>
                <nav>
                    <Row className="nav-row">
                        <Col className="nav-col" xl={1} xs={3}>
                            <NavLink to="/">
                                <span className="nav-text">Home</span>
                                <span className="nav-icon"><FontAwesomeIcon icon={faHome} /></span> 
                            </NavLink>
                        </Col>
                        <Col className="nav-col" xl={1} xs={3}>
                            <NavLink to="/projects" > 
                                <span className="nav-text">Projects</span>
                                <span className="nav-icon"><FontAwesomeIcon icon={faFolderOpen} /></span>
                            </NavLink>
                        </Col>
                        <Col className="nav-col" xl={1} xs={3}>
                            <NavLink to="/about" >
                                <span className="nav-text">About</span>
                                <span className="nav-icon"><FontAwesomeIcon icon={faFileInvoice} /></span>
                            </NavLink>
                        </Col>
                        <Col className="nav-col" xl={1} xs={3}>
                            <NavLink to="/contact" >
                                <span className="nav-text">Contact</span>
                                <span className="nav-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            </NavLink>
                        </Col>
                    </Row>
                </nav>
            </Container>
        </motion.div>
    )
}

export default NavBar
import React from 'react'
import { NavLink } from 'react-router-dom'

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
        <Container fluid className='bar'>
            <nav>
                <Row className="nav-row">
                    <Col className="nav-col" xl={1} xs={3}>
                        <NavLink to="/home">
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
    )
}

export default NavBar
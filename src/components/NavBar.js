import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './NavBar.css'

const NavBar = () => {
    return (
        <Container fluid className='bar'>
            <nav>
                <Row className="nav-row">
                    <Col className="nav-col">
                        <NavLink to="/">Home</NavLink>
                    </Col>
                    <Col className="nav-col">
                        <NavLink to="/projects">Projects</NavLink>
                    </Col>
                    <Col className="nav-col">
                        <NavLink to="/resume">Resume</NavLink>
                    </Col>
                    <Col className="nav-col">
                        <NavLink to="/contact">Contact</NavLink>
                    </Col>
                </Row>
            </nav>
        </Container>
    )
}

export default NavBar
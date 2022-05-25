import React from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './Home.css'

const Home = () => {
    return (
        <div className="home-body">
           <Container fluid>
               <Row className="home-row">
                    <Col sm={6} className="home-left">
                        Howdy! I'm Michael Zitta<br/>
                        Front End Web Developer<br/>
                        I am passionate about creating responsive web applications<br/>
                        <NavLink to="/projects"><button>Check Out My Work!</button></NavLink>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://github.com/mezitta"><FontAwesomeIcon icon={faGithub} /></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-zitta/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </Col>
                    <Col sm={6} className="home-right">
                        Howdy<br/>
                        Howdy<br/>
                        Howdy<br/>
                    </Col>
               </Row>
           </Container>
        </div>
    )
}

export default Home
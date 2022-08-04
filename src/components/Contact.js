import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import { motion } from 'framer-motion'

import './Contact.css'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fxs8ufa', 'template_202xqfc', form.current, 'uGZfEL1BtqlDq53-9')
            .then((result) => {
                console.log(result.text)
                console.log("message sent")
                e.target.reset()
            }, (error) => {
                console.log(error.text)
                console.log("There was an problem sending your message")
            })
    }

    return (
        <motion.div className="contact-body"
            initial = {{width: 0, opacity: 0}}
            animate = {{width: "100%", opacity: 1}}
            exit = {{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <Container fluid>
                <Row className="contact-row">
                    <Col xs={12} md={6} className="left-content">
                        picture goes here
                    </Col>
                    <Col xs={12} md={6} className="right-content">
                        <div className="form-container">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="title-row"><h2>Get in Touch</h2></div>
                                <div className="input-row">
                                    <input 
                                        id="user_name"
                                        type="text"
                                        name="user_name" 
                                        placeholder="Your Name"
                                        aria-label="name"
                                        className="form-input" 
                                        required/>
                                </div>
                                <div className="input-row">
                                    <input 
                                        id="user_email"
                                        type="email"  
                                        name="user_email"
                                        placeholder="Your Email"
                                        aria-label="email"
                                        className="form-input" 
                                        required/>
                                </div>
                                <div className="input-row">
                                    <textarea 
                                        id="user_message"
                                        name="message" 
                                        placeholder="Your Message"
                                        aria-label="message"
                                        className="form-input" 
                                        required/>
                                </div>
                                <div className="contact-button-row"><button type="submit" value="Send" className="send-button"> <FontAwesomeIcon icon={faPaperPlane}/> Send</button></div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Contact
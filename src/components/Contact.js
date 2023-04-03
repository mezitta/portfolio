import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from 'framer-motion'

import './Contact.css'

const Contact = ({contactPic}) => {
    const form = useRef()

    const [openSuccess, setOpenSuccess] = useState(false)
    const [openError, setOpenError] = useState(false)
    const [sending, setSending] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        setSending(true)

        emailjs.sendForm('service_l8sincj', 'template_202xqfc', form.current, 'uGZfEL1BtqlDq53-9')
            .then((result) => {
                console.log(result.text)
                console.log("message sent")
                setOpenError(false)
                setOpenSuccess(true)
                setSending(false)
                e.target.reset()
            }, (error) => {
                console.log(error.text)
                console.log("There was an problem sending your message")
                setOpenSuccess(false)
                setOpenError(true)
                setSending(false)
            })
    }

    return (
        <motion.div className="contact-body"
            initial = {{width: 0, opacity: 0}}
            animate = {{width: "100%", opacity: 1, transition: {duration: 0.2}}}
            exit = {{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <Container fluid>
                <Row ></Row>
                <Row className="contact-row">
                    <Col xs={12} md={6} className="left-content" >
                        <motion.div 
                            className="left-img"
                            style = {{backgroundImage: `url(${contactPic})`}}

                            initial = {{
                                opacity: 0,
                                scale: 0
                            }}

                            animate = {{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.3,
                                    delay: 0.2
                                }
                            }}

                        ></motion.div>
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

                                <AnimatePresence>
                                    {openSuccess && 
                                    <motion.div 
                                        className="success-message"

                                        initial = {{
                                            opacity: 1,
                                            scaleY: 0
                                        }}

                                        animate = {{
                                            opacity: 1,
                                            scaleY: 1,
                                            transition: {
                                                duration: 0.3
                                            }
                                        }}

                                        exit = {{
                                            opacity: 0,
                                            x: 800
                                        }}
                                    >
                                        <div className="message-text"><FontAwesomeIcon icon={faEnvelopeCircleCheck} /> Message Sent</div>
                                        <button 
                                            className="close-message" 
                                            type="button"
                                            onClick={() => {
                                                setOpenSuccess(false)
                                            }}>
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </button>
                                    </motion.div>
                                    }
                                </AnimatePresence>

                                <AnimatePresence>
                                    {openError && 
                                    <motion.div 
                                        className="error-message"

                                        initial = {{
                                            opacity: 1,
                                            scaleY: 0
                                        }}

                                        animate = {{
                                            opacity: 1,
                                            scaleY: 1,
                                            transition: {
                                                duration: 0.3
                                            }
                                        }}

                                        exit = {{
                                            opacity: 0,
                                            x: 800
                                        }}
                                    >
                                        <div className="message-text"><FontAwesomeIcon icon={faTriangleExclamation} /> Error Sending Message</div>
                                        <button 
                                            className="close-message" 
                                            type="button"
                                            onClick={() => {
                                                setOpenError(false)
                                            }}>
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </button>
                                    </motion.div>
                                    }
                                </AnimatePresence>

                                <div className="contact-button-row">
                                    <button type="submit" value="Send" className="send-button">
                                        <div className="btn-txt"><FontAwesomeIcon icon={faPaperPlane}/>   Send</div>
                                        {sending && <div className="loading-icon"></div>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Contact
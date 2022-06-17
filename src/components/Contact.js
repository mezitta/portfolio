import React from 'react'

import { motion } from 'framer-motion'

import './Contact.css'

const Contact = () => {
    return (
        <motion.div className="contact-body"
            initial = {{width: 0, opacity: 0}}
            animate = {{width: "100%", opacity: 1}}
            exit = {{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            Contact
        </motion.div>
    )
}

export default Contact
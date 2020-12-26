/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import { db } from '../../firebase';
import Social from '../reusables/Social';

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [inputError, setInputError] = useState({});

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        const isValid = formValidation();
            if(isValid) {
                db.collection('contacts').add({
                    name: name,
                    email: email,
                    message: message,
                })
                .then(() => {
                    alert("Message has been submitted successfully")
                })
                .catch((error) => {
                    alert(error.message)
                })
        
                setName("");
                setEmail("");
                setMessage("");
            }
        }

    const formValidation = () => {
        const inputError: any = {}
        let isValid = true
        
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            inputError.noInput = "No input should be empty"
            isValid = false;
        }
        
        setInputError(inputError)
        return isValid
    }

    return (
        <div>
            <h2 className="top-title">CONTACT ME</h2>

            <div className="contact-container">
                <div className="contact">  
                    <h3>Have a question or want to work together</h3>

                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" id="full-name" name="name" required value={name} onChange={(e) => setName(e.target.value)} /><br/>
                        <label htmlFor="">Email</label>  
                        <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                        <label htmlFor="">Message</label>
                        <textarea name="message" id="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} /> 
                            {/* {Object.keys(inputError).map((key) => {
                                return <div className="input-error">{inputError[key]}</div>
                            })} */}
                        <button type="submit">Submit</button>
                    </form>

                    <div>
                            <h3 className="social-title">Follow Me</h3>
                            <div className="social">
                                <div>
                                    <Social link="//linkedin.com/in/adewale-nurudeen-adeola-7a02715a/" icon={<FaLinkedin size={32} />} />
                                </div>
                                <div className="social-inner">
                                    <Social link="//twitter.com/AdewaleNurudeen" icon={<FaTwitter size={32} />} />
                                </div>
                                <div>
                                    <Social link="mailto:nurudeenadeolaa@gmail.com" icon={<HiMail size={32} />} />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react'
import { db } from '../../firebase';
import Social from '../reusables/Social';

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Footer from '../Footer';
import { Modal } from '../reusables/Modal';
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState('');
    const [isModalOpen, setModalState] = useState(false);
    const toggleModal = () => setModalState(!isModalOpen);

    const isInvalid = name === '' || email === '' || message === '';

    const handleSubmit = (e: any) => {
        e.preventDefault();
                db.collection('contacts').add({
                    name: name,
                    email: email,
                    message: message,
                })
                .then(() => {
                    console.log("object");
                    setModalState(!isModalOpen);
                })
                .catch((error) => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setError(error.message);
                  });
        
                setName("");
                setEmail("");
                setMessage("");
    }

    return (
        <div>
            <h2 className="top-title">CONTACT ME</h2>

            <div className="contact-container">
                <div className="contact">  
                    <h3>LET'S MAKE SOMETHING SPECIAL <br/> Have a question or want to work together?</h3>

                    <form action="" onSubmit={handleSubmit} method='POST'>
                        {error && <div>{error}</div>}
                        <label htmlFor="full-name">Full Name *</label>
                        <input type="text" id="full-name" required name="name" value={name} onChange={({ target }) => setName(target.value)} /><br/>
                        <label htmlFor="">Email *</label>  
                        <input type="email" id="email" required name="email" value={email} onChange={({ target }) => setEmail(target.value)} /><br/>
                        <label htmlFor="">Message *</label>
                        <textarea name="message" id="message" required rows={5} value={message} onChange={({ target }) => setMessage(target.value)} />
                        <button disabled={isInvalid} type="submit">Submit</button>
                    </form>

                    <Modal isOpen={isModalOpen} onClose={toggleModal} />

                    <div>
                            <h3 className="social-title">Follow Me</h3>
                            <div className="social">
                                <div className="social-inner">
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
            <Footer />
            </div>
        </div>
    )
}

export default Contact

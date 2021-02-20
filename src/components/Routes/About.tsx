import React from 'react'
import profile from "../../images/ADEWALE.jpg"
import { MdMovie } from 'react-icons/md';
import { IoLogoGameControllerB } from 'react-icons/io';
import { FaChess } from 'react-icons/fa';
import { GiMusicalNotes } from 'react-icons/gi';
import { Link } from "react-router-dom";
import Footer from '../Footer';
// import myCv from '../../files/Adewale.pdf'

const About = () => {
    const skills = [
        { name: "HTML"},
        { name: "CSS" },
        { name: "SASS" },
        { name: "JavaScript & TypeScript" },
        { name: "React" },
        { name: "Angular" },
        { name: "Express" },
        { name: "MongoDB & PostgreSQL" },
        { name: "Agile Methodologies" },
        { name: "Git and Github" },
      ];
    return (
        <>
            <h2 className="top-title">ABOUT ME</h2>
            <div className="about-container">
                <div className="about">
                    <div className="left">
                        <img src={profile} alt="My Profile"/>
                    </div>
                    <div className="right">
                        <div className="about-hide-big">
                        <p className="about-text">I worked as a Full-Stack Developer at <span><a style={{color:"#e84ca6", fontWeight: "bolder"}} href="http://verraki.africa" target="_blank" rel="noreferrer">Verraki Partners</a></span> and currently working at <span><a style={{color:"#e84ca6", fontWeight: "bolder"}} href="http://rhbooks.com.ng" target="_blank" rel="noreferrer">RovinHeights</a></span>. I have passion for Technology. I am talented with experiences in wide range of Technology desciplines from <span><a style={{color:"#e84ca6", fontWeight: "bolder"}} href="http://decagonhq.com" target="_blank" rel="noreferrer">Decagon</a></span></p>
                        <p className="about-text">I am ambitioous and driven. I thrive on challenge and constantly set goals from my ability to benefit people and organization while having something to strive towards.</p>
                        <p className="about-text">You can read about my experience, skills, education and more in the PDF attached below</p>
                            <p><Link className="cv" to='/files/Adewale.pdf' target="_blank" download>my cv (74kb)</Link></p>
                        </div>
                        <h4 className="skill-title">Skill Set</h4>
                        {skills.map(el => (
                        <div className="each-right" key={el.name}>
                            {el.name}
                        </div>
                        ))}
                    </div>
                </div>
                <div className="about-hide-small">
                <p className="about-text">I worked as a Full-Stack Developer at <span><a style={{color:"#e84ca6", fontWeight: "bolder"}} href="http://verraki.africa" target="_blank" rel="noreferrer">Verraki Partners</a></span> and currently working at <span><a style={{color:"#e84ca6", fontWeight: "bolder"}} href="http://rhbooks.com.ng" target="_blank" rel="noreferrer">RovinHeights</a></span>. I have passion for Technology. I am talented with experiences in wide range of Technology desciplines from <span><a style={{color:"#e84ca6", fontWeight: "bolder"}} href="http://decagonhq.com" target="_blank" rel="noreferrer">Decagon</a></span></p>
                    <p className="about-text">I am ambitioous and driven. I thrive on challenge and constantly set goals from my ability to benefit people and organization while having something to strive towards.</p>
                    <p className="about-text">You can read about my experience, skills, education and more in the PDF attached below</p>
                    <div className="your-head">
                        <p><Link className="cv" to='/files/Adewale.pdf' target="_blank" download>my cv (74kb)</Link></p>
                    </div>
                </div>
                <div>
                <h4 className="hobbies-title">Hobbies</h4>
                    <div className="hobbies">
                        <div className="each-hobby">
                            <div className="hobby-icon">
                                <MdMovie size={60} color="#1b1b32" />
                            </div>
                            <h4 className="hobby-title">Movies</h4>
                        </div>
                        <div className="each-hobby">
                            <div className="hobby-icon">
                                <IoLogoGameControllerB size={60} color="#1b1b32" />
                            </div>
                            <h4 className="hobby-title">Video Games</h4>
                        </div>
                        <div className="each-hobby">
                            <div className="hobby-icon">
                                <FaChess size={60} color="#1b1b32" />
                            </div>
                            <h4 className="hobby-title">Chess</h4>
                        </div>
                        <div className="each-hobby">
                            <div className="hobby-icon">
                                <GiMusicalNotes size={60} color="#1b1b32" />
                            </div>
                            <h4 className="hobby-title">Music</h4>
                        </div>
                    </div>
                        <Footer />
                </div>
            </div>
        </>
    )
}

export default About

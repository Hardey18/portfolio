import React from 'react'
import profile from "../../images/ADEWALE.jpg"
import { MdMovie } from 'react-icons/md';
import { IoLogoGameControllerB } from 'react-icons/io';
import { FaChess } from 'react-icons/fa';
import { GiMusicalNotes } from 'react-icons/gi';

const About = () => {
    const skills = [
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "90%" },
        { name: "JavaScript", level: "85%" },
        { name: "TypeScript", level: "75%" },
        { name: "React", level: "75%" },
        { name: "Express", level: "75%" },
        { name: "MongoDB", level: "75%" },
        { name: "PostgreSQL", level: "75%" },
        { name: "Git and Github", level: "75%" },
      ];
    return (
        <>
            <h2 className="top-title">ABOUT ME</h2>
            <div className="about-container">
                <div className="about">
                    <div className="left">
                        <img src={profile} alt="My Profile"/>
                        <p className="about-text">I'm currently interning as a SoftWare Engineer for <span style={{color:"#0a319d", fontWeight: "bolder"}}>Verraki Nigeria</span>. I'm a Full-Stack Node Developer in training at Decagon Institute and I have passion for UI effects and creating dynamic user interfaces.</p>
                    </div>
                    <div className="right">
                        {skills.map(el => (
                        <div className="each-right" key={el.name}>
                            {el.name}
                        </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>Hobbies</h2>
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
                </div>
            </div>
        </>
    )
}

export default About

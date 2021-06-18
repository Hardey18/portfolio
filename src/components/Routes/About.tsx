import React from 'react'
import profile from "../../images/ADEWALE.jpg"
import { MdMovie } from 'react-icons/md';
import { IoLogoGameControllerB } from 'react-icons/io';
import { FaFirefoxBrowser } from 'react-icons/fa';
import { GiMusicalNotes } from 'react-icons/gi';
import { Link } from "react-router-dom";
import Footer from '../Footer';

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
                        <p className="about-text">I love building user interfaces, developing web contents, care a whole lot about design and also enjoy working on database. I have passion for Technology. I am talented with experiences in wide range of technology desciplines.</p>
                        <p className="about-text">I am ambitious and driven. I thrive on challenge and constantly set goals from my ability to benefit people and organization while having something to strive towards.</p>
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
                    <p className="about-text">I love building user interfaces, developing web contents, care a whole lot about design and also enjoy working on database. I have passion for Technology. I am talented with experiences in wide range of technology desciplines.</p>
                    <p className="about-text">I am ambitious and driven. I thrive on challenge and constantly set goals from my ability to benefit people and organization while having something to strive towards.</p>
                </div>
                <div>
                <h4 className="resume-title">RESUME</h4>
                <div className="resume-wrapper">
                    <div>
                        <div className="resume-desc">Work Experience</div>
                        <div className="org-name">Decagon</div>
                        <div>Software Engineer</div>
                        <div className="work-duration">2020 - PRESENT</div>
                        
                        <div className="org-name">Verraki</div>
                        <div>Software Engineer</div>
                        <div>2020 - 2021</div>
                    </div>
                    <div>
                        <div className="resume-desc">Education</div>
                        <div className="org-name">Lagos State Polytechnic</div>
                        <div>HND, Building Technology</div>
                        <div>2012 - 2016</div>
                    </div>
                </div>

                <div className="cv-download"><Link className="cv" to='/files/Adewale.pdf' target="_blank" download>Download Resume</Link></div>

                <h4 className="hobbies-title">Other Activities</h4>
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
                                <FaFirefoxBrowser size={60} color="#1b1b32" />
                            </div>
                            <h4 className="hobby-title">Surfing The Net</h4>
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

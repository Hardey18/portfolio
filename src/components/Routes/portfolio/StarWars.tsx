import React from 'react'
import starwars from "../../../images/starwars.png"
import Application from '../../reusables/Application'

const StarWars = () => {
    return (
        <>
            <div>
                <Application 
                    title="FACTORY LANDING PAGE" 
                    image={starwars} 
                    about="A page built with HTML, CSS and JavaScript with a full mobile responsiveness. It displays the characters of Star Wars alongside a dummy image. Clicking on each image will pop up a modal showing Image, Name, Gender and Height" 
                    link="//starwarzapi.netlify.app" 
                />
            </div>
            <ul className="technologies-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </>
    )
}

export default StarWars

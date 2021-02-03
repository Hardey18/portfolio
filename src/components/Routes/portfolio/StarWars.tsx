import React from 'react'
import starwars from "../../../images/starwars.png"
import Application from '../../reusables/Application'

const StarWars = () => {
    return (
        <>
            <div>
                <Application title="FACTORY LANDING PAGE" image={starwars} about="About Product" link="//starwarzapi.netlify.app" />
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

import React from 'react'
import starwars from "../../../images/starwars.png"
import Application from '../../reusables/Application'

const StarWars = () => {
    return (
        <div>
            <Application title="FACTORY LANDING PAGE" description="The static page of a product landing page" image={starwars} about="About Product" link="//starwarzapi.netlify.app" />
        </div>
    )
}

export default StarWars

import React from 'react'
import movieapp from "../../../images/movieapp.png"
import Application from '../../reusables/Application'

const Movie = () => {
    return (
        <div>
            <Application title="FACTORY LANDING PAGE" description="The static page of a product landing page" image={movieapp} about="About Product" link="//hardeymovie.netlify.app" />
        </div>
    )
}

export default Movie

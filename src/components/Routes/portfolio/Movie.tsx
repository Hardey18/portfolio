import React from 'react'
import movieapp from "../../../images/movieapp.png"
import Application from '../../reusables/Application'

const Movie = () => {
    return (
        <>    
            <div>
                <Application title="MOVIE SEARCH APP" image={movieapp} about="About Product" link="//hardeymovie.netlify.app" />
            </div>
            <ul className="technologies-list">
                <li>React</li>
                <li>TypeScript</li>
            </ul>
        </>
    )
}

export default Movie

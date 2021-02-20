import React from 'react'
import movieapp from "../../../images/movieapp.png"
import Application from '../../reusables/Application'

const Movie = () => {
    return (
        <>    
            <div>
                <Application 
                    title="MOVIE SEARCH APP" 
                    image={movieapp} 
                    about="This is a basic Movie Search Application where you can search for any movie of your choice. You pass in a keyword in the search bar and movies related to your keyword will be displayed. The details include: Image, Title, Release Date, Rating, and a brief description. The movie details was fetched from an online API" 
                    link="//hardeymovie.netlify.app" 
                />
            </div>
            <ul className="technologies-list">
                <li>React</li>
                <li>TypeScript</li>
            </ul>
        </>
    )
}

export default Movie

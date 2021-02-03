import React from 'react'
import { Link } from 'react-router-dom'
import movieApp from "../../images/movieapp.png"
import starWars from "../../images/starwars.png"
import product from "../../images/product.png"
import tictactoe from "../../images/tictactoe.png"
import MovieCard from '../MovieCard'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2 className="top-title">MY PORTFOLIO</h2>

            <div className="portfolio-container">
                <Link to="/portfolio/tictactoe">
                    <MovieCard movieTitle="TIC TAC TOE" movieApp={tictactoe} />
                </Link>
                <Link to="/portfolio/movie">
                    <MovieCard movieTitle="MOVIE SEARCH APP" movieApp={movieApp} />
                </Link>
                <Link to="/portfolio/factory">
                    <MovieCard movieTitle="FACTORY LANDING PAGE" movieApp={product} />
                </Link>
                <Link to="/portfolio/starwars">
                    <MovieCard movieTitle="STAR WARS CHARACTERS" movieApp={starWars} />
                </Link>
            </div>
        </div>
    )
}

export default Portfolio

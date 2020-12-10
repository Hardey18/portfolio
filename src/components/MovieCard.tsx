import React, { FC } from 'react'

interface MovieProps {
    movieTitle: string
    movieApp: string
}
const MovieCard: FC<MovieProps> = ({ movieTitle, movieApp }) => {
    return (
        <div>
            <div>
                <div className="each-portfolio">
                    <div className="circle-left">
                        <div className="circle-left-each tomato"></div>
                        <div className="circle-left-each yellow"></div>
                        <div className="circle-left-each green"></div>
                    </div>
                    <header>{movieTitle}</header>
                    <img className="app-image" src={movieApp} alt="Movie Application"/>
                </div>
            </div>
        </div>
    )
}

export default MovieCard

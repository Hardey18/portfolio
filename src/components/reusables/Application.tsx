import React, { FC } from 'react'
import { TiExport } from 'react-icons/ti';
import MovieCard from '../MovieCard';

interface AppProps {
    title: string
    description: string
    image: string
    about: string
    link: string
}

const Application: FC<AppProps> = ({ title, description, image, about, link }) => {
    return (
        <div>
            <h1 className="app-title">{title}</h1>
            <p className="description">{description}</p>
            <div className="visit">
                <a className="visit-link" target="_blank" rel="noreferrer" href={link}>
                    <span className="visit-icon"><TiExport size={20} /></span>
                    VISIT THE WEBSITE
                </a>
            </div>
            <div className="portfolio-text">
                <div className="portfolio-container image-large">
                    <MovieCard movieTitle={title} movieApp={image} />
                </div>
                <div className="portfolio-description">
                    <h2>About this project</h2>
                    <p>{about}</p>
                    <h2>Technical Sheet</h2>
                    <p className="code-technology">Code technologies I got involved with while working on this project.</p>     
                </div>
            </div>      
        </div>
    )
}

export default Application

import React from 'react'
import Application from '../../reusables/Application'
import product from "../../../images/product.png"

const Factory = () => {
    return (
        <>
            <div>
                <Application 
                    title="FACTORY LANDING PAGE" 
                    image={product} 
                    about="A static landing page built with HTML, CSS, and a touch of JavaScript with a full mobile responsiveness." 
                    link="//hardeyproduct.netlify.app" 
                />
            </div>
            <ul className="technologies-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
            </ul>
        </>
    )
}

export default Factory

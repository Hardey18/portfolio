import React from 'react'
import netflix from "../../../images/netflix.png"
import Application from '../../reusables/Application'

function Netflix() {
    return (
        <>    
            <div>
                <Application title="NETFLIX" image={netflix} about="About Product" link="//hardeynetflix.netlify.app" />
            </div>
            <ul className="technologies-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Styled Components</li>
            </ul>
        </>
    )
}

export default Netflix

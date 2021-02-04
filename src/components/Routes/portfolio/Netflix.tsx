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
                <li>JavaScript</li>
                <li>Firebase</li>
                <li>Styled Components</li>
                <li>Jest</li>
            </ul>
        </>
    )
}

export default Netflix

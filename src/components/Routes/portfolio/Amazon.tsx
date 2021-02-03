import React from 'react'
import amazon from "../../../images/amazon.png"
import Application from '../../reusables/Application'
function Amazon() {
    return (
        <>    
            <div>
                <Application title="AMAZON" image={amazon} about="About Product" link="//clone-c128d.web.app/" />
            </div>
            <ul className="technologies-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Styled Components</li>
            </ul>
        </>
    )
}

export default Amazon

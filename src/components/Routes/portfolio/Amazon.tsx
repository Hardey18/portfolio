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
                <li>JavaScript</li>
                <li>Stripe</li>
                <li>Firebase</li>
            </ul>
        </>
    )
}

export default Amazon

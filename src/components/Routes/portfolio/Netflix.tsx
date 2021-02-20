import React from 'react'
import netflix from "../../../images/netflix.png"
import Application from '../../reusables/Application'

function Netflix() {
    return (
        <>    
            <div>
                <Application 
                    title="NETFLIX" 
                    image={netflix} 
                    about="This is a clone of the Netflix website. This React project has multiple pages: Home, Browse (which uses Firebase authentication), sign in, and sign up. The sign in will connect to Firebase when a user tries to sign in, and when a user signs up, Firebase auth is used to store the user in the Firebase auth database. This app was built using React and Styled Components was used for all the styling implemented. Fuse.js was used for live search, and all components were tested using React Testing Library. And React router for navigation!" 
                    link="//hardeynetflix.netlify.app"
                />
            </div>
            <ul className="technologies-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Firebase</li>
                <li>Styled Components</li>
                <li>Jest</li>
            </ul>
        </>
    )
}

export default Netflix

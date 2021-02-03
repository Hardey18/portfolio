import React from 'react'
import ticTacToe from "../../../images/tictactoe.png"
import Application from '../../reusables/Application'

const TicTacToe = () => {
    return (
        <>
            <div>
                <Application title="TIC TAC TOE" image={ticTacToe} about="About Product" link="//tictactoe.netlify.app" />
            </div>
            <ul className="technologies-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Framer Motion</li>
                <li>Styled Components</li>
            </ul> 
        </>
    )
}

export default TicTacToe

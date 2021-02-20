import React from 'react'
import ticTacToe from "../../../images/tictactoe.png"
import Application from '../../reusables/Application'

const TicTacToe = () => {
    return (
        <>
            <div>
                <Application 
                    title="TIC TAC TOE" 
                    image={ticTacToe} 
                    about="This is an application of the popular game Tic Tac Toe. It has a start button on the Home screen where users can click to display the board game. Once the game ends with a winner or tie, you can click restart to play again." 
                    link="//hardey-tictactoe.netlify.app" 
                />
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

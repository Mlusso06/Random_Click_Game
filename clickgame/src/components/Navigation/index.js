import React from 'react';
// setting up my display for the score and directions for the  user to play the game
function Navigation(props) {
    return (
        <div>
            <ul className="nav row">
                <li className="nav-item col-3">
                    <a href="/" className="nav-link">Clicky Game</a>
                </li>
                <li className="nav-item col-3">
                    <a href="/" className="nav-link">{props.result}</a>
                </li>
                <li className="nav-item col-3">
                    <a href="/" className="nav-link">Score: {props.score} | Top Score: {props.topscore}</a>
                </li>
            </ul>
            <div className="jumbotron" >
                <h1 className="center display-4">Welcom to the Cross Fit Wod Picker!</h1>
                <h5 className="center">Click the pictures of the Wod to get your work on. Don't repeat the same work out, or you will loose a point. </h5>
            </div>
        </div>
    )
}

export default Navigation;
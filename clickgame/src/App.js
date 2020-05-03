import React, { Component } from 'react';
import './App.css';
import wodCard from "./wodCard.json";
import Wods from "./components/Wods";
import Navigation from "./components/Navigation";

class App extends Component {
    state = {
        result: "",
        beenClicked: [],
        score: 0,
        topscore: 0,
        wodify: wodCard,
        allWods: wodCard.length,
        gamesPlayed: 0
    };
    // mount the cards and shuffle them
    componentDidMount() {

        const newWod = this.shuffleArray(wodCard);
        this.setState({
            wodify: newWod
        });
    }
    // need to randomize the images that are in the array picking a random element for each original array element Don't click on the same wod image
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    // need to handle the states of the clicked WOD images
    handleclick = (id) => {
        const doubleClk = this.state.beenClicked.includes(id);
        if (doubleClk) {
            if (this.state.score > this.state.topscore) {
                this.setState({
                    result: "Hey you already clicked on this WOD!",
                    score: 0,
                    // replace the score to the top score if it is higher
                    topscore: this.state.score,
                    beenClicked: []
                })
            } else {
                this.setState({
                    result: "Hey you already clicked on this WOD!",
                    score: 0,
                    beenClicked: []
                })
            }
            this.shuffleArray(this.state.wodify);
        }
        else {
            if (this.state.score === (this.state.allWods - 1)) {
                this.setState({
                    result: "All right you Win, get your x-fit On!",
                    score: 0,
                    topscore: 0,
                    beenClicked: []
                })
            }
            // keep on clicking
            this.setState({
                result: "Working Hard, Pick another Wod!",
                // increase the score by 1 as the user picks correct
                score: this.state.score + 1,
                beenClicked: [...this.state.beenClicked, id]
            })
            this.shuffleArray(this.state.wodify);
            console.log(this.state.score);
        }
    }
    // time to take this to the page
    render() {
        return (
            <>
                <Navigation
                    // put this info into the navigation bar
                    result={this.state.result}
                    score={this.state.score}
                    topscore={this.state.topscore}
                />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <header>
                                <p> {this.state.name}
                                </p>
                                <h1>{wodCard[0].name}</h1>
                            </header>
                        </div>
                    </div>

                    <div className="row">
                        {this.state.wodify.map(wodify => (
                            <Wods
                                // pull the info from wods js
                                id={wodify.id}
                                key={wodify.id}
                                image={wodify.image}
                                handleclick={this.handleclick}
                            />
                        ))}
                    </div>
                </div>

            </>
        )
    }
}
export default App;

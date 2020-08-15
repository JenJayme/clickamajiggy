import React, { useContext } from "react";
import ArtContext from "../utils/ArtContext";

function Scorekeeper () {
    
}

resetGame() {
    this.resetScore()
}

resetScore() {
    this.setState({ currentScore: 0 })
}

handleCorrectGuess() {
    var currentScore = this.state.currentScore
    var highScore = this.state.highScore
    currentScore += 1
    if (currentScore > highScore) {
        highScore += 1
    }
    if (currentScore === 12) {
        this.resetImages()
    }
    this.setState({currentScore: currentScore, highScore: highScore})
    this.shuffleCards()
}

processGuess(id) {
    for (const image of this.state.images) {
        if (image.id === id) {
            if (image.guessed) {
                this.resetGame()
            }
            else {
                image.guessed = true
                this.setState({images: this.state.images})
                this.handleCorrectGuess()
            }
        }
    }
}

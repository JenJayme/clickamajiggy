//CARD INDEX.JS
import React from "react";
import Modal from './modal'

let currentScore = 0;
let highScore = 16;

let Paintings = [
    {
        name: "Clocks",
        artURL: "/art/clocks-ru.jpg",
    }, {
        name: "Flaming June",
        artURL: "/art/flaming-june-ru.jpg",
    }, {
        name: "The Kiss",
        artURL: "/art/kiss-ru.jpg",
    }, {
        name: "Lilies",
        artURL: "/art/lilies-ru.jpg",
    }, {
        name: "Ceci N'Est Pas Une Pipe",
        artURL: "/art/magritte1-ru.jpg",
    }, {
        name: "Daybreak",
        artURL: "/art/maxfield-ru.jpg",
    }, {
        name: "Maxfield Parrish 2",
        artURL: "/art/maxfield2-ru.jpg",
    }, {
        name: "Mother and Child",
        artURL: "/art/mother-child-ru.jpg",
    }, {
        name: "Nighthawks",
        artURL: "/art/nighthawks-ru.jpg",
    }, {
        name: "The Scream",
        artURL: "/art/scream-ru.jpg",
    }, {
        name: "The Lady of Shalott",
        artURL: "/art/shallott-ru.jpg",
    }, {
        name: "Room Full of Sistahs",
        artURL: "/art/sistahs-ru.jpg",
    }, {
        name: "Sugarshack",
        artURL: "/art/sugarshack-ru.jpg",
    }, {
        name: "Sunflowers",
        artURL: "/art/sunflowers-ru.jpg",
    }, {
        name: "Wave",
        artURL: "/art/wave-ru.jpg",
    }, {
        name: "Ecstasy",
        artURL: "/art/ecstasy-ru.jpg",
    }
]

class ArtBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paintings: Paintings,
            selection: null,
            currentScore: 0,
            highScore: 0
        }
        //makes constructor aware of these custom methods
        this.randomizePaintings = this.randomizePaintings.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let paintingName = event.target.dataset.painting;
        console.log("Painting Name", paintingName)
        console.log("This.State.Selection", this.state.selection);
        if (paintingName === this.state.selection) {
            //double-check all references to make sure this alert works
            alert("Oops! You clicked that one twice. You lost this time. Try again.");
        } else {
            handleCorrectGuess();
            getCurrentScore();
            this.setState({
                selection: paintingName,
                currentScore: currentScore,
                highScore: highScore
            });
            console.log("This.State-Current Score", this.state.currentScore);
            console.log("This.State-High Score", this.state.highScore)
        }
        this.randomizePaintings();
    }

    randomizePaintings() {
        this.setState({ paintings: Paintings.sort((a, b) => (0.5 - Math.random())) });
    }

    // Then render randomPaintings[] using a for-loop
    render() {
        console.log("Rendering ArtBlock...");
        let paintings = this.state.paintings;
        const ArtBlocks = [];
        for (var i = 0; i < paintings.length; i++) {
            ArtBlocks.push(
                <img key={paintings[i].name}
                    className="artBlock"
                    src={process.env.PUBLIC_URL + paintings[i].artURL}
                    fluid="true"
                    data-painting={paintings[i].name}
                    alt={Paintings[i].name}
                    onClick={this.handleClick}></img>
            )
        }
        return (
            <div>
                <div id="scoreboard" className="score">Score: {this.state.currentScore} | High Score: {this.state.highScore}</div>
                <div id="modal" className="surpriseDiv">
                    {Modal}
                </div>
                <div className="background">
                    {ArtBlocks}
                </div>
            </div>
        )
    }
}

export function handleCorrectGuess() {
    currentScore += 1
    if (currentScore > highScore) {
        highScore += 1
    }

    if (currentScore === 3) {
        alert("Nice! 3 unique clicks so far.\n\nClick 3 more unique images and you'll get a hint to boost your score by 50 points.");
    }

    if (currentScore === 6) {
        alert("You're on a streak! You deserve a bonus.\n\nClick on the word 'score' in the Navbar to give yourself 50 points.\n\nKeep playing - three more unique clicks and you'll find another easter egg...")
    }

    if (currentScore === 9) {
        popSurpriseDiv();
    }
    // console.log("Current Score", currentScore);
    // console.log("High Score", highScore);
    return (currentScore, highScore);
}

function getCurrentScore() {
    return currentScore;
}

let getHighScore = () => {
    return highScore;
}

function popSurpriseDiv() {
    console.log("Running popSurpriseDiv() function...")
    var surpriseDiv = document.getElementById("surpriseDiv");
    surpriseDiv.classList.remove("hidden");
  }

export default ArtBlock;

// export {getCurrentScore, getHighScore};
// exports.currentScore = currentScore;
// exports.highScore = highScore;
// exports.ArtBlock = ArtBlock;
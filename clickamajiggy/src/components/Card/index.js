//CARD INDEX.JS
import React from "react";

let Paintings = [
    {
        name: "Clocks",
        artURL: "/art/clocks-ru.jpg",
    },{
        name: "Flaming June",
        artURL: "/art/flaming-june-ru.jpg",
    },{
        name: "The Kiss",
        artURL: "/art/kiss-ru.jpg",
    },{
        name: "Lilies",
        artURL: "/art/lilies-ru.jpg",
    },{
        name: "Ceci N'Est Pas Une Pipe",
        artURL: "/art/magritte1-ru.jpg",
    },{
        name: "Daybreak",
        artURL: "/art/maxfield-ru.jpg",
    },{
        name: "Maxfield Parrish 2",
        artURL: "/art/maxfield2-ru.jpg",
    },{
        name: "Mother and Child",
        artURL: "/art/mother-child-ru.jpg",
    },{
        name: "Nighthawks",
        artURL: "/art/nighthawks-ru.jpg",
    },{
        name: "The Scream",
        artURL: "/art/scream-ru.jpg",
    },{
        name: "The Lady of Shalott",
        artURL: "/art/shallott-ru.jpg",
    },{
        name: "Room Full of Sistahs",
        artURL: "/art/sistahs-ru.jpg",
    },{
        name: "Sugarshack",
        artURL: "/art/sugarshack-ru.jpg",
    },{
        name: "Sunflowers",
        artURL: "/art/sunflowers-ru.jpg",
    },{
        name: "Wave",
        artURL: "/art/wave-ru.jpg",
    },{
        name: "Ecstasy",
        artURL: "/art/ecstasy-ru.jpg",
    }
]

class ArtBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paintings: Paintings,
            selection: null
        }
        //makes constructor aware of these custom methods
        this.randomizePaintings = this.randomizePaintings.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let paintingName = event.target.dataset.painting;
        if (paintingName === this.state.selection) {
            //double-check all references to make sure this alert works
            alert("Wrong!");
        } else {
            this.setState({ selection: paintingName });
        }
        this.randomizePaintings();
    }

    randomizePaintings() {
        this.setState({ paintings: Paintings.sort((a,b) => (0.5 - Math.random())) });
    }

    // Then render randomPaintings[] using a for-loop
        render () {
            console.log("Engaging ArtBlock component in card index.js...");
            let paintings = this.state.paintings;
            const ArtBlocks = [];

            for (var i = 0; i < paintings.length; i++) {
                ArtBlocks.push(
                    <img className="artBlock" src={paintings[i].artURL} data-painting={paintings[i].name} alt={paintings[i].name} onClick={this.randomizePaintings}></img>
                )
            }
                return (
                    <div>
                        {ArtBlocks}
                    </div>
                )
        }
}

export default ArtBlock;

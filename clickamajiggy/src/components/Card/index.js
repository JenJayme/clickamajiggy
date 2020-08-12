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
        name: "Ecstasy",
        artURL: "/art/maxfield-ru.jpg",
    },{
        name: "Maxfield Parrish 2",
        artURL: "/art/flaming-maxfield2-ru.jpg",
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
    }
]

class ArtBlock extends React.Component{

        render () {
            console.log("Engaging ArtBlock component in card index.js...");
            const ArtBlocks = [];
            for (var i = 0; i < Paintings.length; i++) {
                ArtBlocks.push(
                    <img className="artBlock" src={Paintings[i].artURL} alt={Paintings[i].name}></img>
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


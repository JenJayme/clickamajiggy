import React, { useContext } from "react";
import ArtContext from "../utils/ArtContext";

function ArtInfo() {
    const { name, artURL } = useContext(ArtContext);

    return (
        <div className="artBlock">
            <img key={name}
                className="artBlock"
                src={artURL}
                data-painting={name}
                alt={name} />
        </div>
    );
}

export default ArtInfo;
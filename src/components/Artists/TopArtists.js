import React from "react";

import Artist from "./Artist"
import {TracksContainer} from "../../assets/style"

const TopArtists = props => {

// console.log(props)

// console.log(props.data.items)

let TopArtistsResults = props.data.items;

  return (
      

    <TracksContainer>

        {TopArtistsResults ? (
          TopArtistsResults.map(artist => (
            <Artist key={artist.id} data={artist} />
          ))
        ) : ( "" )}

    </TracksContainer>

  );
}

export default TopArtists;
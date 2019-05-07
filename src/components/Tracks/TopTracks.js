import React, {useState}  from "react";

import Track from "./Track"
import {TracksContainer} from "../../assets/style"


const TopTracks = props => {

let TopTracksResults = props.data.items;

// console.log(props)

const [activeOverlay, toggleActiveOverlay] = useState(false);


  return (
     

        <TracksContainer>
        
        {TopTracksResults ? (
            TopTracksResults.map(track => (
            <Track 
              key={track.id} 
              data={track} 
              toggleActiveOverlay={toggleActiveOverlay} 
              activeOverlay={activeOverlay}/>
          ))
        ) : ( "" )}
        </TracksContainer>

  );
}

export default TopTracks;
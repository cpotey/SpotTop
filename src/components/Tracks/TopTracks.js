import React  from "react";
import styled from 'styled-components';

import Track from "./Track"
import {TracksContainer} from "../../assets/style"


const TopTracks = props => {

let TopTracksResults = props.data.items;

// console.log(props)


  return (
     

        <TracksContainer>
        
        {TopTracksResults ? (
            TopTracksResults.map(track => (
            <Track 
              key={track.id} 
              data={track} />
          ))
        ) : ( "" )}
        </TracksContainer>

  );
}

export default TopTracks;
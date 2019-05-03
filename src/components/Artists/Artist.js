import React from "react";

import styled from 'styled-components';

import {ItemWrapper} from "../../assets/style"

const Artist = props => {

  
  const ArtistWrapper = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    // width: 25%;
    height: 100%;
    position: relative;

    img {
        width:100%;
        float:left;
        
        &.artist {
            border-radius:100%;
        }
    }


    a {
      cursor:pointer;
    }
  `;



// console.log(props)

  return (
    <ArtistWrapper>

    <a href={props.data.uri} target="_blank" rel="noopener noreferrer">
        <img className="artist" alt={`Band artwork for ${props.data.name}`}src={props.data.images[0].url} />
    </a>

        

    </ArtistWrapper>
  );
}

{/* <Column>
          <a href={props.data.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <img src={props.data.images[0].url} />
          </a>
        </Column>

        <Column>
          <div className="now-playing__artist">
            <h2>{props.data.name}</h2>
            <p>{formatNumber(props.data.followers.total)} Followers</p>
          </div>
          <GenreList>{displayGenres(props.data.genres)}</GenreList>
        </Column> */}

// Turn nubmer into CSV
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// Run through the genres
function displayGenres(genres) {
  if(genres) {
      return genres.map(genre => (
          <div className="item" key={genre}>{genre}</div>
      ))
  }  
}

export default Artist;
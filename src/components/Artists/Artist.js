import React from "react";

import styled from 'styled-components';


const Artist = props => {

  
  const ArtistWrapper = styled.li`
    display: flex;
    flex-direction: row;
    width: 46%;
    align-items: center;
    padding: 1.5%;
    position: relative;
    background-color: #242424;
    color: #fff;
    margin-bottom: 1rem;
    margin-right:2%;
    overflow: hidden;

    @media screen and (min-width:640px) and (max-width:840px) {
      // width:100%;
      // margin-right:0;
      padding: 3% 1.5%
    }
    @media screen and (max-width:639px) {
      width:100%;
      margin-right:0;
    }
   

    &:hover {
      h2 {
        color:#1db954
      }
      .bg {
        filter: blur(1px);
      }
    }

    &:nth-child(2n) {
      margin-right:0;
    }

    img {
        // width:100%;
        float:left;
        max-width: 150px;
        margin-right: 2rem;
        
        &.artist {
            border-radius:100%;

            @media screen and (min-width:640px) and (max-width:840px) {
              margin: 0 0 1rem;
            }
        }
    }


    a {
      cursor:pointer;
      color:#fff;
      text-decoration:none;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 1;

      @media screen and (min-width:640px) and (max-width:840px) {
        flex-direction: column;
      }
    }
  `;

  const ArtistContent = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
    text-align:center;
    width: 100%;

    h2 {
      margin:0;
      transition:.3s ease;
      margin-bottom:1rem;

      @media screen and (max-width:450px) {
        font-size: 1.2em;
      }
    }
    p {
      margin:0;
    }
  `;

  const Bg = styled.div`
        background-image: url(${props => props.img});
        background-size: 100%;
        background-position: 50% 50%;
        bottom: 0;
        display: block;
        filter: blur(8px);
        transition:.3s ease;
        height: 100%;
        left: 0;
        opacity: .2;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;
    `;

// console.log(props)

  return (
    <ArtistWrapper>
    <Bg className="bg" img={props.data.images[1].url}></Bg>

    <a href={props.data.uri}>
        <img className="artist" alt={`Band artwork for ${props.data.name}`}src={props.data.images[1].url} />
        <ArtistContent>
        <h2>{props.data.name}</h2>
        <p>{formatNumber(props.data.followers.total)} Followers</p>
        </ArtistContent>
    </a>

        

    </ArtistWrapper>
  );
}



// Turn nubmer into CSV
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// Run through the genres
// function displayGenres(genres) {
//   if(genres) {
//       return genres.map(genre => (
//           <div className="item" key={genre}>{genre}</div>
//       ))
//   }  
// }

export default Artist;
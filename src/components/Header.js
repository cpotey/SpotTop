import React,{useState} from "react";
import styled from 'styled-components';


import {Container} from "../assets/style"
import Note from "../assets/images/note"
import Playlist from "../assets/images/playlist"

const Header = (props) => {

  const [currentPage, setCurrentPage] = useState('tracks');

    const Wrapper = styled.header`
      background-color: #212327;
      color: #fff;
  
      h1 {
          margin:0;
          min-height:54px;
          display:flex;
          align-items: center;

          span {
            color:#1db954;
          }
      }

      svg {
        // background-color: #fff;
        background-color: #1db954;
        border-radius: 100%;
        margin-right: 0.5rem;
        width: 24px;
        height: 24px;

        path {
          // fill: #fff;
        }
      }

      ul {
        margin: 0;
    margin-left: auto;
        display:flex;
        padding:0;
        list-style-type: none;
        

        li {

          color:#fff;
            text-decoration:none;
            padding: 17px 30px;
            cursor:pointer;
            transition:.3s ease;

            &.active-page {
              color:#1db954;
              background-color:#1d1d1d;
            }

          &:last-of-type {
            
              // padding-right:0;
          }

          &:hover {
            background-color:#151515;
          }

          @media screen and (max-width:450px) {
            padding:17px 20px;
          }
        }
      }
    `;

    // console.log(props)

    function setPage(pageName){
      setCurrentPage(pageName);
    }
    
    

  return (

    <Wrapper>
      <Container>
        
      <Note /><h1><span>Spot</span>Top</h1> 
        
          {(props.token) ? (
            <ul>
              <li className={currentPage === "tracks" ? 'active-page' : ''}
              onClick={() => {
                setPage('tracks');
                props.setActiveID(1);
                props.getTopTracks(props.token)
                props.setActivePage("tracks") 
              }}>Tracks</li>
              <li className={currentPage === "artists" ? 'active-page' : ''}
              onClick={() => {
                setPage('artists');
                props.setActiveID(1);
                props.getTopArtists(props.token)
                props.setActivePage("artists") 
              }}>Artists</li>
            </ul>
          ) : ''}
        
      </Container>
    </Wrapper>
    
  );
}

export default Header;
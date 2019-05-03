import React from "react";
import styled from 'styled-components';


import {Container} from "../assets/style"



const Header = (props) => {

    const Wrapper = styled.header`
      background-color: #212327;
      color: #fff;
      padding: 8px 0;
  
      h1 {
          margin:0;
      }

      ul {
        margin-left: auto;
        display:flex;
        padding:0;
        list-style-type: none;

        li {

          color:#fff;
            text-decoration:none;
            padding: 0 30px;
            cursor:pointer;

          &:last-of-type {
            
              padding-right:0;
          }
        }
      }
    `;

    // console.log(props)
    

  return (

    <Wrapper>
      <Container>
        <h1>TipTop</h1>
        
          {(props.token) ? (
            <ul>
              <li onClick={() => {
              props.setActiveID(1);
              props.getTopTracks(props.token)
              props.setActivePage("tracks") 
              }}>Tracks</li>
              <li onClick={() => {
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
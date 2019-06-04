import React from "react";
import styled from 'styled-components';

import {Container} from "../assets/style"

const Footer = (props) => {

    const Wrapper = styled.footer`
      background-color: #212327;
      color: #fff;
      padding: 14px 0;
  
      h1 {
          margin:0;
      }p {
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
    const Link = styled.p`
      color:#fff;
      a {
          color:#fff;
          text-decoration:none;
      }
    `;

  return (

    <Wrapper className="logged-in">
      <Container>
          
        <Link>Built by <a href="https://connorpote.co.uk" target="_blank" rel="noopener noreferrer">Connor Pote</a></Link>
      </Container>
    </Wrapper>
    
  );
}

export default Footer;
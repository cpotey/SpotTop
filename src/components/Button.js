import React from "react";
import styled from 'styled-components';

const Button = props => {

    const Button = styled.a`
    border-radius: 500px;
    padding: ${props.filter ? "0.6rem 1.25rem 0.5rem;" : "1rem 2rem 0.9rem"};
    ${props.hero ? "padding: 1.2rem 2.4rem 1.05rem;" : ""}
    text-decoration:none;
    color: #fff;
    background-color: ${props.filter ? "#232323" : "#1db954"};
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height:1;
    font-size:${props.filter ? "0.85rem" : "1rem"};
    ${props.hero ? "font-size:1.1rem" : ""};
    ${props.hero ? "font-weight:bold" : ""};
    cursor:pointer;
    transition:.3s ease;
    ${props.filter ? "margin-left:0.5rem" : ""};
    ${props.playlist ? "margin-top:1rem" : ""};
    

    &:hover {
        background-color:#179c46;
    }
    ${props.filter ? "&:hover { background-color:#151515;}" : ""};

    &.active {
        background-color: #1db954;
    }

    
  `;
  
        return  <Button href={props.href} className={props.className} onClick={props.onClick}>
                    {props.children}
                </Button>;
   
}


export default Button;
import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';

import Close from "../../assets/images/close"
import Button from "../Button";
import {ItemWrapper} from "../../assets/style"


const Track = props => {

    const [activeOverlay, toggleActiveOverlay] = useState(false);
    
    const Overlay = styled.div`
        // position: absolute;
        // width: 100%;
        // height: 100%;
        // right: 100%;
        // background-color: #000;
        // color:#fff;

        display: none; 
        position: fixed;
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto;
        background-color: rgb(0,0,0); 
        background-color: rgba(0,0,0,0.8);
        cursor:pointer;

        &.active {
            display:block;
        }

        .flex {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        .inner {
            background-color: #212327;
            // width:1150px;
            // width:1200px;
            display: flex;
            position: relative;
            color:#fff;
            overflow: hidden;

            .column {
                z-index:10;

                &.left {

                    img {
                        max-width:450px;
                    }
                }
                &.right {
                    width: inherit;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 2rem 3rem;
                    max-width: 450px;
                    align-items: flex-start;


                }
            }
            .close-track {
                position: absolute;
                right: 1rem;
                top: 1rem;
                transition:.3s ease;
                display: flex;

                span.note {
                    border-radius: 500px;
                    padding: 10px 20px;
                    text-decoration: none;
                    color: #1db954;
                    background-color: #fdfdfd;
                    font-weight: bold;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    line-height: 1;
                    font-size: 0.9rem;
                    margin-right: 1rem;
                    transition: .3s ease;
                    min-width: initial;
                    font-family: 'Cera',-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
                }
                span.icon {
                    border-radius: 500px;
                    padding: 5px;
                    display: flex;
                    text-decoration: none;
                    color: #fff;
                    background-color: #1db954;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    line-height: 1;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: .3s ease;

                    &:hover {
                        background-color: #179c46;
                    }
                }

                &:hover {
                    color:#1db954;
                }
            }
           
        }

        h1 {
            font-size: 2rem;
            margin:0;
        }
        h2 {
            font-size:1.25rem;
            margin:0;
            opacity:0.85;
        }

        @media screen and (max-width:1150px) {
            .inner {
                max-width: 90%;
            }
        }
        @media screen and (max-width:920px) {
            .inner {
                // flex-direction: column;

                h1 {
                    font-size: 1.4rem;
                    margin: 0 0 0.5rem;
                }
                .button-wrapper {
                    flex-direction: column;
                    margin-top:0.75rem;

                    .link {
                        margin-top: 0.5rem;
                        min-width: 100px;
                        text-align: center;
                        margin-right: 0;
                    }
                }
            }
        }
        @media screen and (min-width:751px) {
            .note {
                display:none;
            }
        }
        @media screen and (max-width:750px) {
            .inner {
                flex-direction: column;
                align-items: center;
                background-color:transparent;
                position: initial;
                border-radius: 5px;
                overflow: inherit;
                

                .background-poster {
                    opacity: 1;
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                img {
                    z-index: -111;
                }

                .column {
                    &.left {
                        img {
                            max-width: 300px;
                            box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
                        }
                    }
                    &.right {
                        max-width: none;
                        text-align: center;
                        align-items: center;
                        // background-color: #212327;
                        min-width: 250px;
                        padding: 15px 25px;
                        background-color: transparent;
                    }
                }
                
            }
            
        }
        @media screen and (max-width:640px) {
            .inner {
               
                h1 {
                    font-size: 1.2rem;
                    margin: 0 0 0.3rem;
                }
                h2 {
                    font-size: 1.1rem;
                }
                .button-wrapper {
                    margin-top: 0.25rem;
                }
                .background-poster {
                    opacity: 1;
                }
                .right {
                    border-bottom-right-radius: 5px;
                    border-bottom-left-radius: 5px;
                }

               
            }
        }
    `;

    const Bg = styled.img`
        background-image: url(${props => props.img});
        background-size: 100%;
        background-position: 50% 50%;
        bottom: 0;
        display: block;
        filter: blur(8px);
        height: 100%;
        left: 0;
        opacity: .2;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;
    `;

    const ButtonWrapper = styled.div`
        display:flex;
        margin-top: 1.5rem;

        .link {
            margin-right:0.5rem;
            font-size: 0.85rem;
            padding: 0.7rem 1.25rem 0.6rem;
            &:last-of-type {
                margin-right:0;
            }
        }
    `;

    const Tile = styled.div`

    
    `;

    const node = useRef();

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

      const handleClick = e => {
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click 
        toggleActiveOverlay(false)
      };
      


    return (
        <ItemWrapper>

        <Tile className="clickable" onClick={() => {toggleActiveOverlay(true)} }>
            <img alt={`Album art for ${props.data.name} by ${props.data.artists[0].name}`}src={props.data.album.images[0].url} />
        </Tile>

        
            <Overlay className={(activeOverlay) ? ("active") : ""}>
                <div className="flex">
                    <div className="inner"  >
                        <Bg className="background-poster" img={props.data.album.images[0].url}></Bg>
                            <div className="column left">
                                <img alt={`Album art for ${props.data.name} by ${props.data.artists[0].name}`}src={props.data.album.images[0].url} />
                            </div>
                            <div className="column right" >
                                <div className="close-track clickable" onClick={()=>{toggleActiveOverlay(false)}}>
                                    <span className="note">Tap anywhere to close</span>
                                    <span className="icon"><Close /></span></div>
                                <h1>{props.data.name}</h1>
                                <h2>{props.data.artists[0].name}</h2>
                                <ButtonWrapper className="button-wrapper" ref={node}>
                                    <Button className="link" href={props.data.uri}>Play track</Button>
                                    <Button className="link" href={props.data.artists[0].uri}>View artist</Button>
                                </ButtonWrapper>
                                

                            </div>
                    </div>
                </div>
            </Overlay>
        

        </ItemWrapper>
    );

}


export default Track;
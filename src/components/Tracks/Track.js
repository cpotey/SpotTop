import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';

import Button from "../Button";
import {ItemWrapper} from "../../assets/style"

import PlayFill from "../../assets/images/play_fill"
import PauseFill from "../../assets/images/pause_fill"


const Track = props => {

    const [activeOverlay, toggleActiveOverlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    
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
    `;

    const Bg = styled.img`
        background-image: url(https://i2-prod.plymouthherald.co.uk/incoming/article2812835.ece/ALTERNATES/s615/0_Untitled-design.jpg);
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
      

    // console.log(props)

    // var player = document.getElementById(`player_${props.data.id}`);
    // function play() {
    //     player.src = props.data.preview_url;
    //     player.play();
    //     setIsPlaying(true);
    // } 
    // function pause() {
    //     player.pause();
    //     setIsPlaying(false);
    // }  

    return (
        <ItemWrapper>

        <a onClick={() => {toggleActiveOverlay(true)} }>
            <img alt={`Album art for ${props.data.name} by ${props.data.artists[0].name}`}src={props.data.album.images[0].url} />
        </a>

        
            <Overlay className={(activeOverlay) ? ("active") : ""}>
                <div className="flex">
                    <div className="inner" ref={node} >
                        <Bg img={props.data.album.images[0].url}></Bg>
                            <div className="column left">
                                <img alt={`Album art for ${props.data.name} by ${props.data.artists[0].name}`}src={props.data.album.images[0].url} />
                            </div>
                            <div className="column right">
                                <h1>{props.data.name}</h1>
                                <h2>{props.data.artists[0].name}</h2>
                                <ButtonWrapper>
                                    <Button className="link" href={props.data.uri}>Play track</Button>
                                    <Button className="link" href={props.data.album.uri}>View album</Button>
                                </ButtonWrapper>
                                {/* <audio src="" id={`player_${props.data.id}`}></audio>  
                                {(!isPlaying) ? (
                                    <a id={`play_${props.data.id}`} onClick={()=> {play()}}><PlayFill /></a>
                                ) : 
                                (
                                    <a id={`pause_${props.data.id}`} onClick={()=> {pause()}}><PauseFill /></a>
                                )} */}

                            </div>
                    </div>
                </div>
            </Overlay>
        

        </ItemWrapper>
    );

}


export default Track;
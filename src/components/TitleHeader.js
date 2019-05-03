import React, {useState,useRef,useEffect} from "react";
import styled from 'styled-components';

import Button from "./Button";

const TitleHeader = props => {

const TracksContainer = styled.ul`
  max-width:1150px;
  margin:0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const TitleHeader = styled.div`
  display:flex;
  justify-content: space-between;
  padding:1rem 0;

  h1 {
    margin:0;
  }
`;

const FilterButtons = styled.div`
  text-align:right;
  align-self: flex-end;
  display: flex;
`;

const [buttons] = useState(
  [
    { filter: "long_term", name: "All-time" }, 
    { filter: "medium_term", name: "6 months" },
    { filter: "short_term", name: "4 weeks" },
  ]);
const [activeID, setActiveID] = useState(null);

console.log(props)


    
return (

    <TitleHeader>
        <h1>Your Top Tracks</h1>
        
        <FilterButtons>
        {activeID}
        
        {buttons.map((button, index) => (
            <Button filter 
                key={index} 
                className={index === activeID? "active": ""}
                onClick={()=>{
                    setActiveID(index);
                    props.getTopTracks(props.token,button.filter);
                }
                }>
                {button.name}{index}{activeID}
            </Button>
            ))
        }

        </FilterButtons>
    </TitleHeader>

)

}


export default TitleHeader;
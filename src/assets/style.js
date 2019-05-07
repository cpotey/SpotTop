import styled from 'styled-components';

export const MainWrapper = styled.div`
      min-height: 90vh;
      background-color:#282c34;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 1150px) {
        max-width:100%;
        padding: 0 3%;
        width: 94%;
      overflow: hidden;
      }
`;

export const TracksContainer = styled.ul`
  max-width:1150px;
  margin:0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;
export const Container = styled.div`
    max-width:1150px;
    margin: 0 auto;
    display:flex;
    align-items: center;

    @media screen and (max-width: 1150px) {
      max-width:100%;
      padding:0 3%;
    }
`;

export const TitleHeader = styled.div`
  display:flex;
  justify-content: space-between;
  padding:1.75rem 0 2.5rem;

  h1 {
    margin:0;
    color:#fff;
    margin-top: 1.5rem;
    margin-bottom: -15px;
    font-size: 3.5rem;
  }

  @media screen and (max-width:950px) {
    flex-direction:column;
    padding: 1rem 0 1.5rem;

    h1 {
      margin-bottom: 1rem;
      font-size: 3rem;
    }
  }
  @media screen and (max-width:450px) {
    h1 {
      font-size: 2.7rem;
    } 
  }
  @media screen and (max-width:349px) {
    h1 {
      font-size: 2rem;
    } 
  }
`;

export const FilterButtons = styled.div`
  text-align:right;
  align-self: flex-end;
  display: flex;

  @media screen and (max-width:950px) {
    align-self: flex-start;
    
    a:first-of-type {
      margin-left:0;
    }
  }

  @media screen and (max-width:475px) {
    .filter-button {
      padding: 8px 7px 6px;
      text-align:center;
    }
  }
`;

export const ItemWrapper = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    // max-height: 450px;
    // width: 25vw;
    width: 25%;
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

    @media screen and (max-width:800px) {
      width:33.333%;
    }
    @media screen and (max-width:640px) {
      width:50%;
    }
`;


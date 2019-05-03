import styled from 'styled-components';

export const MainWrapper = styled.div`
      min-height: 90vh;
      background-color:#282c34;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
`;

export const FilterButtons = styled.div`
  text-align:right;
  align-self: flex-end;
  display: flex;
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
`;


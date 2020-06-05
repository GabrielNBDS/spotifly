import styled from 'styled-components';

export const PlayerDiv = styled.div`
  width: 100%;
  height: 10vh;

  background: #000;
`;

export const PlayerContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;  

    img {
      margin-right: 15px;
    }
  }
`;

export const PlayerPart = styled.div`
  p {
    color: white
  }
`;
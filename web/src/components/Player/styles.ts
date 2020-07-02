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

  div {
    display: flex;
    align-items: center;  

    img {
      margin-right: 15px;
    }
  }
`;

export const Time = styled.span`
  color: white;
  font-size: 20px;
  margin: 20px;
`;

export const SliderContainer = styled.div`
  width: 50vh;

  .myslider {
    appearance: none;
    width: 100%;
    height: 5px;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;
    background-image: linear-gradient(to right, color-stop(0%, #fff), color-stop(0%, #000));

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: white;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 20px;
      height: 20px;
      background: white;
      cursor: pointer;
    }
  }
`;

export const PlayerControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: transparent;
    border: none;
  }
`;
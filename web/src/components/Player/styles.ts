import styled from 'styled-components';

export const PlayerDiv = styled.div`
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: center;

  background: #000;
`;

export const PlayerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  

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
  text-align: left;
  width: 60px;
  font-size: 20px;
  margin: 20px;
`;

export const SliderContainer = styled.div`
  width: 750px;

  @media(max-width: 1300px) {
    max-width: 500px;
  }
  @media(max-width: 900px) {
    max-width: 300px;
  }
  @media(max-width: 650px) {
    max-width: 80px;
  }

  .myslider {
    appearance: none;
    width: 100%;
    height: 5px;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;

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

export const VolumeControl = styled.div`
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .volumeslider {
    appearance: none;
    width: 100%;
    height: 5px;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
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
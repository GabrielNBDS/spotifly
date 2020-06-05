import styled, { keyframes } from 'styled-components';

const fromLeft = keyframes`
  0% {
    transform: translateX(-1000px);
  }

  80% {
    transform: translateX(30px);
  }

  100% {
    transform: translateX(0);
  }
`;

const fromBottom = keyframes`
  0% {
    transform: translateY(200px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const LandingDiv = styled.div`
  width: 100%;
  height: 100%;

  background: #121212;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  height: 100%;

  h2 {
    font-weight: bold;
    font-size: 60px;

  }

  h2:nth-of-type(1) {
    margin-top: 5vh;
    animation: ${fromLeft} 2s;

  }
  h2:nth-of-type(2) {
    animation: ${fromLeft} 2.5s;

  }

  p {
    animation: ${fromLeft} 2.5s;
    margin: 5vh 0;
    font-size: 32px
  }

  a {
    background: transparent;
    border: 1px solid #1ECF5F;
    max-width: 400px;
    border-radius: 10px;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    margin-top: 10px;
    margin-bottom: -10px;
    padding: 18px 14px;
    
    color: #1ECF5F;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;

    animation: ${fromBottom} 1s ease-out 1.5s;
    animation-fill-mode: backwards;

    transition: .2s;

    &:hover {
      background: #1ECF5F;
      border: 1px solid transparent;
      color: #000;
    }
    
  }

  a:nth-of-type(2) {
    margin: 0;
    animation: ${fromBottom} 1.5s ease-out 1.5s;
    animation-fill-mode: backwards;

    
  }

`;
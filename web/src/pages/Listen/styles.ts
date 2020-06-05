import styled from 'styled-components';

export const ListenDiv = styled.div`
  width: 100%;
  height: 80vh;

  background: #121212;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  height: 100%;
  
  display: flex;
  flex-direction: column;
  max-width: 500px
  
`;

export const Search = styled.div`
  display: flex;
  height: 50px;
  width: 100%;

  margin: 10px 0;
  border-radius: 10px;
  background: #444;

  input {
    flex: 1;
    background: #444;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0 10px;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 15px;
    background: #000;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const SongBox = styled.div`
  height: 80px;
  width: 100%;

  color: #000;

  display: flex;
  align-items: center;

  margin: 10px 0;
  padding: 0 20px;
  border-radius: 10px;
  background: radial-gradient(175.49% 2795.85% at -2.18% 0%, #1ECF5F 0%, #1E85CF 100%);

  button {
    background: transparent;
    border: none;
  }

  svg {
    margin-right: 20px;
  }

  h2 {
    font-weight: 400;
  }
  `;
import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../../components/Header';

import { LandingDiv, Container } from './styles'

const Landing = () => {

  return (
    <>
      <Header />
      <LandingDiv>
        <Container>
          <h2>
            QUALQUER UM PODE ENVIAR.
          </h2>
          <h2>
            QUALQUER UM PODE OUVIR.
          </h2>
          
          <p>
            O Spotifly é o seu novo hub de músicas.
          </p>
          <Link to="/listen" >Ouvir agora</Link>
          <br></br>
          <Link to="/add" >Adicione suas músicas</Link>
        </Container>
      </LandingDiv>
    </>
    
  )

}

export default Landing;
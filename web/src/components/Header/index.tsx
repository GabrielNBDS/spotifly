import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HeaderDiv, HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [windowPath, setWindowPath] = useState('');

  useEffect(() => {
    setWindowPath(window.location.pathname);
  }, [])
  return (
    <HeaderDiv>
      <HeaderContainer>
        <div>
          <img src={logo} alt="fly" width="50px" />
          <h1>Spotifly</h1>
        </div>
        
        {windowPath !== '/' && 
        <Link to="/">
          Voltar
        </Link>}
        
      </HeaderContainer>
    </HeaderDiv>
  )
}

export default Header;
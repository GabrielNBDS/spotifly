import React from 'react';

import { SongProvider } from './hooks/song'
import Routes from './Routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <SongProvider>
      <Routes />
      <GlobalStyle />
    </SongProvider>
  );
};

export default App;

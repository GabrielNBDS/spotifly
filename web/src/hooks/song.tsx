import React, { createContext, useContext, useCallback, useState } from 'react';

interface SongData {
  setCurrentSong(url: string): void;
  song: string;
}

const SongContext = createContext<SongData>({} as SongData);

const SongProvider: React.FC = ({ children }) => {
  const [song, setSong] = useState('');

  const setCurrentSong = useCallback((url:string) => {
      setSong(url);
    },
  [],);

  return (
    <SongContext.Provider value={{ setCurrentSong, song }}>
        {children}
    </SongContext.Provider>
  );
};

function useSong(): SongData {
  const context = useContext(SongContext);

  if (!context) {
    throw new Error('useToas must be used within a SongProvider');
  }

  return context;
}

export { SongProvider, useSong };

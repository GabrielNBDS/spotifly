import React, { createContext, useContext, useCallback, useState } from 'react';

interface SongData {
  setCurrentSong(data: Song): void;
  song: Song;
}

interface Song {
  author: string;
  song: string;
  song_url: string;
}

const SongContext = createContext<SongData>({} as SongData);

const SongProvider: React.FC = ({ children }) => {
  const [song, setSong] = useState<Song>({} as Song);

  const setCurrentSong = useCallback(({author, song, song_url}: Song) => {
      setSong({author, song, song_url});
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

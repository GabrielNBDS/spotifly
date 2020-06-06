import React, { useState, ChangeEvent, useEffect } from 'react';
import { FiSearch, FiPlayCircle } from 'react-icons/fi';
import { GiSoundOn } from 'react-icons/gi';

import api from '../../services/api';
import { useSong } from '../../hooks/song';

import Header from '../../components/Header';
import Player from '../../components/Player';
import { ListenDiv, Container, Search, SongBox } from './styles';

interface ISong {
  id: number;
  author: string;
  song: string;
  song_url: string;
}
 
const Listen = () => {
  const [songName, setSongName] = useState('');
  const [isFocused, setIsFocused] = useState(false)
  const [iconColor, setIconColor] = useState('#444');
  
  const [songs, setSongs] = useState<ISong[]>([]);

  const songContext = useSong();

  useEffect(()=> {
    async function getSongs() {
      const response = await api.get('/songs');
      setSongs(response.data);
    }

    getSongs();
  }, [] )

  useEffect(()=> {
    songName !== '' || isFocused ? setIconColor('#1ECF5F') : setIconColor('#444');
  }, [iconColor, isFocused, songName])
  
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSongName(e.target.value);
  }

  return (
    <>
      <Header />
      <ListenDiv>
        <Container>
          <Search>
            <input
              type="text"
              name="song"
              id="song"
              value={songName}
              onChange={handleInputChange}
              onFocus={()=> setIsFocused(true)}
              onBlur={()=> setIsFocused(false)}
            />
            <div>
              <FiSearch size={32} color={iconColor} />
            </div>
          </Search>

          {songs.map(song => {
            const { id, author, song: songName } = song;

            return (
              <SongBox key={id}>
                <button 
                  onClick={()=> songContext.setCurrentSong(song)}
                >
                  {songContext.song.song === songName 
                    ? <GiSoundOn size={48} color={'#000'} />
                    : <FiPlayCircle size={48} color={'#000'} />
                  } 
                </button>
                <div>
                  <h1>{songName}</h1>
                  <h2>{author}</h2>
                </div>
              </SongBox>
          )})}

        </Container>
      </ListenDiv>
      <Player />
    </>
  )

}

export default Listen;
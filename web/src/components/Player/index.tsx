import React, { useState, useEffect } from 'react';

import { useSong } from '../../hooks/song';
import { PlayerDiv, PlayerContainer} from './styles';
//import AudioPlayer from 'react-modular-audio-player';
//<AudioPlayer controls src={song} autoPlay className='audiocontainer'/>

const Player = () => {
  const songContext = useSong();

  const [song, setSong] = useState('');

  useEffect(() => {
    setSong(songContext.song.song_url);
  }, [song, songContext.song]);

  return (
    <PlayerDiv>
      <PlayerContainer>
        
      </PlayerContainer>
    </PlayerDiv>
  
  )
}

export default Player;
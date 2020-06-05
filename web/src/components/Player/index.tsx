import React, { useState, useEffect } from 'react';

import { useSong } from '../../hooks/song';
import { PlayerDiv, PlayerContainer, PlayerPart} from './styles';
import {FiPlayCircle} from 'react-icons/fi';

const Player = () => {
  const songContext = useSong()

  const [song, setSong] = useState('');

  useEffect(() => {
    setSong(songContext.song);

  }, [song, songContext.song])

  return (
  <PlayerDiv>
    <PlayerContainer>
      <audio src={song} autoPlay/>
      <PlayerPart>
        <p className="musicName">
          
        </p>
        <button>
          <FiPlayCircle size='20' color='#fff'/>
        </button>
      </PlayerPart>
    </PlayerContainer>
  </PlayerDiv>
  
  )
}

export default Player;
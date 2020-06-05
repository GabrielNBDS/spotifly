import React, { useState, useEffect } from 'react';

import { useSong } from '../../hooks/song';
import { PlayerDiv, PlayerContainer } from './styles';

const Player = () => {
  const songContext = useSong()

  const [song, setSong] = useState('');

  useEffect(() => {
    setSong(songContext.song);

  }, [song, songContext.song])

  return (
  <PlayerDiv>
    <PlayerContainer>
      <audio controls src={song} autoPlay/>
    </PlayerContainer>
  </PlayerDiv>
  
  )
}

export default Player;
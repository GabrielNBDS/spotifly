import React, { useState, useEffect, useRef } from 'react';

import { useSong } from '../../hooks/song';
import { PlayerDiv, PlayerContainer, PlayerPart} from './styles';
import {FiPlayCircle, FiPauseCircle} from 'react-icons/fi';

const Player = () => {
  const songContext = useSong();

  const [song, setSong] = useState('');
  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>();
  const [time, setTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);

  useEffect(() => {
    setSong(songContext.song.song_url);
    setMaxTime(audio?.duration ? audio.duration:0);
  }, [song, songContext.song]);

  function handlePlay() {
    if (play) {
      setPlay(!play);
      audio?.pause();
    } else {
      setPlay(!play);
      audio?.play();
    }
  }

  function handleTimeUpdate() {

  }

  return (
  <PlayerDiv>
    <PlayerContainer>
      <audio ref={a => setAudio(a)} src={song} autoPlay onPlay={() => setPlay(true)} onTimeUpdate={handleTimeUpdate}/>
      <PlayerPart>
        <div>
          <p className="musicName">
            {songContext.song.song}
          </p>
          <p className="musicAuthor">
            {songContext.song.author}
          </p>
        </div>
        <button onClick={handlePlay}>
          {play ? <FiPauseCircle size='24' color='#fff'/>:<FiPlayCircle size='24' color='#fff'/>}
        </button>
        <progress value={time} max={maxTime} />
      </PlayerPart>
    </PlayerContainer>
  </PlayerDiv>
  
  )
}

export default Player;
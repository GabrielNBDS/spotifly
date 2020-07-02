import React, { useState, useEffect, FormEvent } from 'react';
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi';

import { useSong } from '../../hooks/song';
import { PlayerDiv, PlayerContainer, Time, SliderContainer, PlayerControls } from './styles';

function convertTime(time:number):string {
  let s = Math.floor(time%60);
  let seconds = s < 10 ? `0${s}`:s;
  let m = Math.floor(time/60);
  return `${m}:${seconds}`;
}

const Player = () => {
  const songContext = useSong();
  const [audio, setAudio] = useState<HTMLMediaElement>({} as HTMLMediaElement);
  const [currentTime, setCurrentTime] = useState('0');
  const [durationTime, setDurationTime] = useState('0');
  const [play, setPlay] = useState(false);
  const [sliderValue, setSliderValue] = useState('0');

  const [song, setSong] = useState('');

  useEffect(() => {
    setSong(songContext.song.song_url);
  }, [song, songContext.song]);

  function audioReference(ref:HTMLMediaElement) {
    setAudio(ref);
  }

  function loadedMetadata() {
    setPlay(true);
    audioControl();
  }

  function audioControl() {
    let duration = audio.duration;
    let current = audio.currentTime;
    let percent = (current/duration)*100;

    setCurrentTime(convertTime(current));
    setDurationTime(convertTime(duration));

    setSliderValue(String(percent));
  }

  function changeRange(event:FormEvent<HTMLInputElement>) {
    let percent = Number(event.currentTarget.value)/100;
    let x = audio.duration*percent;

    audio.currentTime = x;
  }

  function player() {
    if (play) {
      audio.pause();
      setPlay(!play);
    } else {
      audio.play();
      setPlay(!play);
    }
  }

  return (
    <PlayerDiv>
      <PlayerContainer>
        <PlayerControls>
          <button onClick={player} >
            {
              play ? 
              <FiPauseCircle size={48} color='#fff' />
              :
              <FiPlayCircle size={48} color='#fff' />
            }
          </button>
        </PlayerControls>
        <div>
          <Time>{currentTime}</Time>

          <SliderContainer>
            <audio src={song} ref={audioReference} autoPlay onLoadedMetadata={loadedMetadata} onTimeUpdate={audioControl} />
            <input type='range' min='0' max='100' className='myslider' value={sliderValue} onInput={changeRange} />
          </SliderContainer>

          <Time>{durationTime}</Time>
        </div>
      </PlayerContainer>
    </PlayerDiv>
  )
}

export default Player;
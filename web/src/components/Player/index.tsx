import React, { useState, useEffect, FormEvent } from 'react';
import { FiPlayCircle, FiPauseCircle, FiVolume, FiVolume1, FiVolumeX, FiVolume2 } from 'react-icons/fi';

import { useSong } from '../../hooks/song';
import { PlayerDiv, PlayerContainer, Time, SliderContainer, PlayerControls, VolumeControl } from './styles';

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
  const [durationTime, setDurationTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [sliderValue, setSliderValue] = useState('0');
  const [volume, setVolume] = useState(100);

  const [song, setSong] = useState('');

  useEffect(() => {
    setSong(songContext.song.song_url);
  }, [song, songContext.song]);

  function audioReference(ref:HTMLMediaElement) {
    setAudio(ref);
  }

  function loadedMetadata() {
    setPlay(true);
    let duration = audio.duration;

    setDurationTime(duration);

    audioControl();

    let percent = volume/100;

    audio.volume = song ? percent : 0;
  }

  function audioControl() {
    let current = audio.currentTime;
    let percent = (current/durationTime)*100;

    setCurrentTime(convertTime(current));

    setSliderValue(String(percent));
  }

  function changeRange(event:FormEvent<HTMLInputElement>) {
    let percent = Number(event.currentTarget.value)/100;
    let x = durationTime*percent;

    audio.currentTime = song ? x : 0;
  }

  function changeVolume(event:FormEvent<HTMLInputElement>) {
    let volume = Number(event.currentTarget.value);
    setVolume(volume);

    let percent = volume/100;

    audio.volume = song ? percent : 0;
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
            <audio src={song} ref={audioReference} autoPlay onLoadedMetadata={loadedMetadata} onTimeUpdate={audioControl} onEnded={() => setPlay(false)} />
            <input type='range' min='0' max='100' className='myslider' value={sliderValue} onChange={changeRange} />
          </SliderContainer>

          <Time>{convertTime(durationTime)}</Time>

          <VolumeControl>
            <div className="icon">
              {
                volume == 0 ?
                  <FiVolumeX size={24} color='#fff' />
                :
                  volume < 33 ?
                    <FiVolume size={24} color='#fff' />
                  :
                    volume < 66 ?
                      <FiVolume1 size={24} color='#fff' />
                    :
                      <FiVolume2 size={24} color='#fff' />
              }
            </div>
            <input type="range" min='0' max='100' className='volumeslider' value={volume} onChange={changeVolume} />
          </VolumeControl>
        </div>
      </PlayerContainer>
    </PlayerDiv>
  )
}

export default Player;
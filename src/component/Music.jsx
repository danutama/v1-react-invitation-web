import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import backsound from '../assets/backsound.mp3';

const Music = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const playMusic = () => {
    const audio = document.getElementById('audio');

    if (audio.paused) {
      audio.play();
      setIsMusicPlaying(true);
    } else {
      audio.pause();
      setIsMusicPlaying(false);
    }
  };

  useEffect(() => {
    const handleFirstClick = () => {
      document.removeEventListener('click', handleFirstClick);
      playMusic();
    };

    document.addEventListener('click', handleFirstClick);

    return () => {
      document.removeEventListener('click', handleFirstClick);
    };
  }, []);

  useEffect(() => {
    const audio = document.getElementById('audio');
    audio.loop = true;

    const handleEnded = () => {
      setIsMusicPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className='music-wrapper'>
      <audio loop id="audio">
        <source src={backsound} type="audio/mpeg" />
        Browser Anda tidak mendukung elemen audio.
      </audio>
      <button onClick={playMusic}>
        <FontAwesomeIcon icon={isMusicPlaying ? faVolumeUp : faVolumeMute} />
      </button>
    </div>
  );
};

export default Music;

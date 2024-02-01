import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import vid1 from '../assets/video/1.mp4';
import vid2 from '../assets/video/2.mp4';
import vid3 from '../assets/video/3.mp4';
import vid4 from '../assets/video/4.mp4';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState([false, false, false, false]);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = [useRef(), useRef(), useRef(), useRef()];

  const playPause = (index) => {
    const video = videoRefs[index].current;
    if (video.paused) {
      video.play();
      setIsPlaying((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
    } else {
      video.pause();
      setIsPlaying((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }
  };

  const changeVideo = (index) => {
    setCurrentVideo(index);
    videoRefs[index].current.play();
  };

  const videos = [vid1, vid2, vid3, vid4];
  const videoTitles = ['Perlindungan & Kesejahteraan Anak Disabilitas', 'Melawan Stigma HIV dikalangan Masyarakat', 'Peran Mahasiswa Terhadap Sosialisasi Masyarakat Tanggap Bencana', 'Penggunaan Media Sosial Untuk Pemberdayaan Masyarakat'];

  const youtubeLinks = ['https://youtu.be/ujWtEa8_fyk?si=UU6WEGtfssNdEnKW', 'https://youtu.be/3CUCNzpLwZ8?si=IddHFhXi4fKqu7Sk', 'https://youtu.be/X7dKsQt__kY?si=fOnSp5LjHtoT4ilg', 'https://youtu.be/ktpn1bpRYBY?si=LOEDtGh6tvh6FPsz'];

  const handleVideoEnded = (index) => {
    setIsPlaying((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div className="video-wrapper">
      {videos.map((video, index) => (
        <div key={index} className="video-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200}>
          <div className="video-container">
            <video ref={videoRefs[index]} width="300" src={video} type="video/mp4" controls={false} onClick={() => playPause(index)} onEnded={() => handleVideoEnded(index)}>
              Browser Anda tidak mendukung tag video.
            </video>
            <div className="video-controls">
              <button onClick={() => playPause(index)}>
                <FontAwesomeIcon icon={isPlaying[index] ? faPause : faPlay} />
              </button>
            </div>
          </div>
          <div className="video-text">
            <p>{videoTitles[index]}</p>
            <a href={youtubeLinks[index]} target="_blank">
              YouTube
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;

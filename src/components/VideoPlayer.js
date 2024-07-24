import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  height: 100vh; /* Make the video container take full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  .video-js {
    width: 100%;
    height: 100%; /* Make the video element take full height */
  }
`;

const VideoPlayer = ({ src, onPlay }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.className = 'video-js vjs-big-play-centered';
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.preload = 'auto';

    if (videoRef.current) {
      videoRef.current.appendChild(videoElement);
      console.log('Video element added to DOM:', videoElement);

      playerRef.current = videojs(videoElement, {
        controls: true,
        autoplay: true,
        preload: 'auto',
        sources: [{ src, type: 'application/x-mpegURL' }]
      });

      playerRef.current.on('loadedmetadata', () => {
        console.log('Video metadata loaded:', playerRef.current);
      });

      playerRef.current.on('play', () => {
        console.log('Video is playing:', playerRef.current);
        onPlay();
      });

      playerRef.current.on('pause', () => {
        console.log('Video is paused:', playerRef.current);
      });

      playerRef.current.on('error', () => {
        console.error('Video.js error:', playerRef.current.error());
      });

      playerRef.current.on('ready', () => {
        console.log('Video.js player is ready:', playerRef.current);
      });
    }

    return () => {
      if (playerRef.current) {
        console.log('Disposing video player');
        playerRef.current.dispose();
      }
      if (videoRef.current) {
        videoRef.current.innerHTML = ''; // Clean up video element
      }
    };
  }, [src, onPlay]);

  return <VideoContainer ref={videoRef} />;
};

export default VideoPlayer;

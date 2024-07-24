import React, { useState } from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import MovieList from './components/MovieList';
import { GlobalStyle } from './styles';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMovieSelect = (src) => {
    setSelectedMovie(src);
    setIsPlaying(false); // Reset playing state when a new movie is selected
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <GlobalStyle />
      {!isPlaying && <Header />}
      {selectedMovie ? (
        <VideoPlayer src={selectedMovie} onPlay={handlePlay} />
      ) : (
        <MovieList onSelect={handleMovieSelect} />
      )}
    </>
  );
};

export default App;

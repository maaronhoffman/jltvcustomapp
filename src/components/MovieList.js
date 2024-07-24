import React from 'react';
import styled from 'styled-components';
import mockData from '../mockData';

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const MovieCard = styled.div`
  background: #141414;
  color: white;
  width: 200px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    padding: 10px;
  }
`;

const MovieList = ({ onSelect }) => {
  return (
    <MovieGrid>
      {mockData.map((movie) => (
        <MovieCard key={movie.id} onClick={() => onSelect(movie.src)}>
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
        </MovieCard>
      ))}
    </MovieGrid>
  );
};

export default MovieList;

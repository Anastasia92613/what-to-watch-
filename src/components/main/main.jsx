import React from 'react';
import PropTypes from "prop-types";

import MovieCard from '../movie-card/movie-card';

const Main = ({movieCards}) => {
  return (
    <>
      {movieCards.map((card) => {
        return (
          <MovieCard key={card.id} item={card} />
        );
      })}
    </>
  );
};

Main.propTypes = {
  movieCards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }).isRequired,

  )
};
export default Main;

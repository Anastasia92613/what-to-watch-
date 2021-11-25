import React from 'react';
import PropTypes from "prop-types";

const MovieCard = ({item = {}}) => {
  const {img, title, href} = item;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={img} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={href}>{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  item: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }).isRequired,

  )
};

export default MovieCard;

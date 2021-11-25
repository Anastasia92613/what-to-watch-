import React from 'react';
import PropTypes from "prop-types";

import Main from '../main/main';

const App = ({movieCards}) => {
  return (
    <>
      <Main movieCards={movieCards} />
    </>
  );
};

App.propTypes = {
  movieCards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }).isRequired,
  )
};

export default App;

import React from 'react';
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import ErrorPage from '../error-page/error-page';

const App = ({movieCards}) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main movieCards={movieCards} />
          </Route>
          <Route path="/login" exact>
            <SignIn />
          </Route>
          <Route path="/mylist" exact>
            <MyList />
          </Route>
          <Route path="/films/:id" exact>
            <MoviePage />
          </Route>
          <Route path="/films/:id/review" exact>
            <AddReview />
          </Route>
          <Route path="/player/:id" exact>
            <Player />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
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

import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';
// e.g. { getTopMovies, ... }
import * as movieActions from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';

class MovieBrowser extends React.Component {

  componentDidMount() {
    this.props.getTopMovies(1);
  }

  render() {
    const {topMovies} = this.props;
    const movies = movieHelpers.getMoviesList(topMovies.response);

    return (
      <div>
        <AppBar title='TheMovieDb Hershak' />
        <Grid>
          <Row>
            <p>Search..</p>
          </Row>
          <Row>
             <MovieList movies={movies} isLoading={topMovies.isLoading} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    topMovies: state.movieBrowser.topMovies
  }),
  { ...movieActions }
)(MovieBrowser);
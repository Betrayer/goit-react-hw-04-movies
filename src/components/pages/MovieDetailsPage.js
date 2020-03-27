import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import services from "../services";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    services.getMovieDetails(this.props.location.state.id).then(({ data }) => {
      this.setState({ movie: data });
    });
  }

  render() {
    const { movie, movie: { genres = [] } = [] } = this.state;
    return (
      <>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movie poster"
          />
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average * 10}%</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <p>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `/movies/${movie.id}/cast`,
                  state: { id: movie.id }
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/movies/${movie.id}/reviews`,
                  state: { id: movie.id }
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <Route path={`/movies/${movie.id}/cast`} component={Cast} />
          <Route path={`/movies/${movie.id}/reviews`} component={Reviews} />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;

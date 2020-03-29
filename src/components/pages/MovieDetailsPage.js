import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import services from "../services";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import css from "./movieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    services.getMovieDetails(this.props.location.state.id).then(({ data }) => {
      this.setState({ movie: data });
    });
  }

  handleGoback = () => {
    const { history, location } = this.props;
    if (location.state) {
      // return history.push(location.state.from);
      // history.goBack();
    }
    return history.push("/");
  };

  render() {
    const { movie, movie: { genres = [] } = [] } = this.state;
    return (
      <>
        <div className={css.buttonWrapper}>
          <button
            className={css.goBackButton}
            type="button"
            onClick={this.handleGoback}
          >
            Go back
          </button>
        </div>

        <div className={css.movieWrapper}>
          <div className={css.posterWrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie poster"
            />
          </div>

          <div className={css.movieInfoWrapper}>
            <h2 className={css.movieTitle}>{movie.title}</h2>
            <p className={css.movieScore}>User score: {movie.vote_average * 10}%</p>
            <p className={css.movieOverview}>Overview:</p>
            <p className={css.movieOverviewText}>{movie.overview}</p>
            <p className={css.movieGenres}>Genres:</p>
            <p>
              {genres.map(genre => (
                <span className={css.movieGenresList} key={genre.id}>{genre.name} </span>
              ))}
            </p>
          </div>
        </div>
        <div>
          <p className={css.additionalInfo}>Additional information:</p>
          <ul className={css.additionalInfoList}>
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

import React, { Component } from "react";
import { Link } from "react-router-dom";
import services from "../services";
import SearchBar from "../searchBar/SearchBar";
import css from './moviesPage.module.css'

export default class MoviesPage extends Component {
  state = {
    movies: []
  };

  onSearch = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`
    });
    services.getMoviesSearchBar(query).then(({ data }) => {
      this.setState({ movies: data.results });
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={css.moviesWrapper}>
        <SearchBar onSearch={this.onSearch} />
        <ul className={css.resultList}>
          {movies.map(movie => (
            <li className={css.resultListItem} key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { id: movie.id }
                }}
              >
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import services from "../services";
import SearchBar from "../searchBar/SearchBar";

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
    const { location } = this.props;
    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location }
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

import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    inputValue: ""
  };

  handleChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Let's find a movie!"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;

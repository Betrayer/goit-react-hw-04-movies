import React, { Component } from "react";
import services from "../services";

class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const id = this.props.location.state.id;
    services.getMovieCast(id).then(({ data }) => {
      this.setState({ cast: data.cast });
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <div>
        <ul>
          {cast.map(cast => (
            <li key={cast.cast_id}>
              <p>Character:</p>
              <p>{cast.character}</p>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : "https://lh3.googleusercontent.com/proxy/dU7LkRtsQVaZ2PzcPnzMO63OYQ8wr9hoRQUBUyUHJVOxl_3judSWdChNR-Z3fycnyiqhU1ouixIlTl_VloK7viArt1IG6Yk"
                }
                alt={cast.name}
              />
              <p>{cast.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;

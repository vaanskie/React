import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
class Watch extends Component {
  state = {
    toWatch: getMovies()
  };

  handleDelete = toList => {
    const toDelete = this.state.toWatch.filter(m => m._id !== toList._id);
    this.setState({ toWatch: toDelete });
  };

  render() {
    const { length: counter } = this.state.toWatch;
    if (counter === 0) return <p>There are no movies in the database</p>;
    return (
      <React.Fragment>
        <p>Showing {counter} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Genre</th>
              <th />
            </tr>
            {this.state.toWatch.map(toList => (
              <tr key={toList._id}>
                <td>{toList.title}</td>
                <td>{toList.genre.name}</td>
                <td>{toList.numberInStock}</td>
                <td>{toList.dailyRentalRate}</td>
                <td
                  onClick={() => this.handleDelete(toList)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </React.Fragment>
    );
  }
}

export default Watch;

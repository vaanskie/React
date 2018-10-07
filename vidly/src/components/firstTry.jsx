import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Watch extends Component {
  state = {
    toWatch: getMovies()
  };

  deleteEvent = movie => {
    const movies = this.state.toWatch.filter(m => m._id !== movie._id);
    this.setState({ toWatch: movies });
  };
  render() {
    return (
      <div>
        <h1>asa</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>

            {this.state.toWatch.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td
                  onClick={() => this.deleteEvent(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    );
  }
}

export default Watch;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import noImage from "./noImage.jpg";
import { Img } from "react-image";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <Img
            className="w-100 mb-2"
            src={[movie.Poster, noImage]}
            alt="Movie Cover"
          />

          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn btn-primary" to={"/movie/" + movie.imdbID}>
            Movie Details &nbsp;
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = "";
    const notFound = (
      <p className=" mb-4 text-danger text-center h1">Not Found !!</p>
    );
    content = movies
      ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      : notFound;

    return <div className={content === notFound ? "" : "row"}>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);

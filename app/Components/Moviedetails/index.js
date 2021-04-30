import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const MovieDetails = ({ movie, clearMovieInfoPanel }) => {
  const titleCallback = useCallback(() => {
    document.title = "moviePortal";
  }, [movie]);

  useEffect(() => {
    if(movie){
      document.title = movie.title;
    }
    return titleCallback;
  });

  return movie ? (
    <div className="movieDetails">
      <Link to="/" className="closeMovieDetails" onClick={() => clearMovieInfoPanel()}>
        ✖
      </Link>
      <div className="movieDetailsInfo">
        <img src={movie.movieUrl} width="240" height="320" />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <span>{movie.realiseDate}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="movieDetails">
      <Link to="/" className="closeMovieDetails" onClick={() => clearMovieInfoPanel()}>
        ✖
      </Link>
      <h1>Movie not found!</h1>
    </div>
  );
};

export default MovieDetails;

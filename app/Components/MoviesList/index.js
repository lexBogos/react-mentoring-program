import React from "react";
import MovieCard from "../MovieCard";
import "./index.scss";

const MoviesList = ({
  movieList: movies,
  setModalFields,
  setModalActive,
  movieListHook,
  setChoosenMovie,
}) => (
  <div className="movieList">
    {movies.map((movie, index) => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        key={movie.id}
        movieUrl={movie.movieUrl}
        realiseDate={movie.realiseDate}
        genre={movie.genre}
        index={index}
        setModalFields={setModalFields}
        setModalActive={setModalActive}
        movies={movies}
        movieListHook={movieListHook}
        setChoosenMovie={setChoosenMovie}
      />
    ))}
    ;
  </div>
);

export default MoviesList;

import React, {useEffect} from 'react';
import MovieCard from '../MovieCard';
import { connect } from 'react-redux';
import { moviesLoaded, moviesRequested, onMovieChosen } from '../../actions';
import { withMovieStoreService } from '../hoc';

import "./index.scss";

const MoviesList = ({
  movies,
  loading,
  movieStoreService,
  moviesLoaded,
  moviesRequested,
  onMovieChosen,
}) => { 
    useEffect(() => {
      moviesRequested()
      movieStoreService.getMovies().then((data)=> {
        moviesLoaded(data);
      });
    }, [])
  if(loading){
    return <h2>Loading...</h2>
  }  
  return <div className="movieList">
    {movies.map((movie) => (
      <MovieCard
        movie={movie}
        key={movie.id}
        onMovieChosen={onMovieChosen}
      />
    ))}
    ;
  </div>
};

const mapStateToProps = ({ movies, loading }) => {
  return {
    movies,
    loading
  }
};

const mapDispatchToProps = {moviesLoaded, moviesRequested, onMovieChosen};

export default withMovieStoreService()(connect(mapStateToProps, mapDispatchToProps)(MoviesList));

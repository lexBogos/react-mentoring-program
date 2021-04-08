import React, {useEffect, useCallback} from "react";
import "./index.scss";

const MovieDetails = ({movie, clearMovieInfoPanel}) => {

const titleCallback =  useCallback(()=>{document.title = 'moviePortal'}, [movie]);

useEffect(() => {
        document.title = movie.title
        return titleCallback
});  


  return (
    <div className="movieDetails">
      <a href="#" onClick={() => {
        clearMovieInfoPanel()
      }}>
        ✖
      </a>
      <div className='movieDetailsInfo'>
        <img src={movie.movieUrl} width="240" height="320"/>
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <span>{movie.realiseDate}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

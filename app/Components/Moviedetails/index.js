import React, {useEffect, useCallback} from "react";
import "./index.scss";

const MovieDetails = ({ choosenMovie, setChoosenMovie, movieList }) => {

const titleCallback =  useCallback(()=>{document.title = 'moviePortal'}, [choosenMovie]);

useEffect(() => {
        document.title = movieList[choosenMovie].title
        return titleCallback
});  

const customHookFunction = () => {
    useEffect(() => {
        alert('Custom hook example')
    }), []
}

const customhook = customHookFunction();

  return (
    <div className="movieDetails">
      <a href="#" onClick={() => {customhook, setChoosenMovie(-1)}}>
        ✖
      </a>
      <div className='movieDetailsInfo'>
        <img src={movieList[choosenMovie].movieUrl} width="240" height="320"/>
        <div>
            <h2>{movieList[choosenMovie].title}</h2>
            <p>{movieList[choosenMovie].description}</p>
            <span>{movieList[choosenMovie].realiseDate}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

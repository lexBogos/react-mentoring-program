import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MovieCard = ({movie, showMovieInfoPanel, onMovieChosen}) => 
    <div className='movieCard' >
        <img src={movie.movieUrl} width="240" height="320"/>
        <div>
            <h3>{movie.title}</h3>
            <span>{movie.genre}</span>
        </div>
        <span className='movieYear'>{movie.realiseDate}</span>
        <div className='movieCardActions'>
            <a href='#' onClick={(event) => {
                event.preventDefault();
                onMovieChosen(movie.id, 'EDIT_MOVIE');
                }}>edit</a>
            <a href='#' onClick={(event) => {
                event.preventDefault();
                onMovieChosen(movie.id, 'REMOVE_MOVIE');
                }}>delete</a>
            <a href='#' onClick={(event) => {
                event.preventDefault();
                showMovieInfoPanel(movie.id);
                window.scrollTo(0, 0);
                }}>...</a>    
        </div>
    </div>

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default MovieCard;
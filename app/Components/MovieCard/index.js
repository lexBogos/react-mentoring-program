import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MovieCard = ({title, type, poster, year}) => 
    <div className='movieCard' >
        <img src={poster} width="240" height="320"/>
        <h3>{title}</h3>
        <span className='movieType'>{type}</span>
        <span className='movieYear'>{year}</span>
    </div>

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
}

export default MovieCard;
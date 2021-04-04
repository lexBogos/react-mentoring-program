import React from 'react';
import './index.scss';

const AddMovie = ({onMovieChosen}) => <button className='addMovieButton' onClick={() => {
    onMovieChosen(undefined, 'MOVIE_ADD')
    }
} >+ ADD MOVIE</button>

export default AddMovie;
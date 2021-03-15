import React from 'react';
import './index.scss';

const AddMovie = ({setModalActive, setModalFields, func}) => <button className='addMovieButton' onClick={() => {
    setModalFields({func:func});
    setModalActive(true)}
} >+ ADD MOVIE</button>

export default AddMovie;
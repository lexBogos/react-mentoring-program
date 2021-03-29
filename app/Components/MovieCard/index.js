import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const editMovieModalFields = (hook, list, setActive, index) => {
    const movieObj = {
        title: '',
        realiseDate: '',
        movieUrl: '',
        genre: 'sci-fi',
        overview: '',
        runTime: ''
    }

    return <div className = 'addMovie'>
    <h3>Edit Movie</h3>
    <div>
        <span>TITLE</span>
        <input defaultValue={list[index].title} onChange={(event) => {movieObj.title = event.target.value}}></input>
    </div>
    <div>
        <span>RELEASE DATE</span>
        <input defaultValue={list[index].realiseDate} onChange={(event) => {movieObj.realiseDate = event.target.value}}></input>
    </div>
    <div>
        <span>MOVIE URL</span>
        <input defaultValue={list[index].movieUrl} onChange={(event) => {movieObj.movieUrl = event.target.value}}></input>
    </div>
    <div>
        <span>GENRE</span>
        <select name="genre" id="genre" onChange={(event) => {movieObj.genre = event.target.value}}>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="action">Action</option>
        </select>
    </div>
    <div>
        <span>OVERVIEW</span>
        <input onChange={(event) => {movieObj.overview = event.target.value}}></input>
    </div>
    <div>
        <span>RUNTIME</span>
        <input onChange={(event) => {movieObj.runTime = event.target.value}}></input>
    </div>
    <div className='modalButton'>
        <button onClick={() => {setActive(false)}}>RESET</button>
        <button onClick={() => {
            
            list[index] = {...list[index], ...movieObj };
            hook(list);
            setActive(false);
        }}>SAVE</button>
    </div>
</div>
};

const deleteMovieModalFields = (hook, list, setActive, index) => {

    return <div className = 'addMovie'>
    <h3>Delete Movie</h3>
    <div>
        <span>Are you sure want to delete this movie ?</span>
    </div>
    <div className='modalButton'>
        <button onClick={() => {
            list.splice(index,1)
            hook(list);
            setActive(false);
        }}>CONFIRM</button>
    </div>
</div>
};

const MovieCard = ({title, movieUrl, realiseDate, genre, setModalFields, setModalActive, index, setChoosenMovie}) => 
    <div className='movieCard' >
        <img src={movieUrl} width="240" height="320"/>
        <div>
            <h3>{title}</h3>
            <span>{genre}</span>
        </div>
        <span className='movieYear'>{realiseDate}</span>
        <div className='movieCardActions'>
            <a href='#' onClick={(event) => {
                event.preventDefault();
                setModalFields({func:editMovieModalFields, index:index})
                setModalActive(true);
                }}>edit</a>
            <a href='#' onClick={(event) => {
                event.preventDefault();
                setModalFields({func:deleteMovieModalFields, index:index})
                setModalActive(true);
                }}>delete</a>
            <a href='#' onClick={(event) => {
                event.preventDefault();
                setChoosenMovie(index)
                window.scrollTo(0, 0)
                }}>...</a>    
        </div>
    </div>

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    // poster: PropTypes.string.isRequired,
    realiseDate: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
}

export default MovieCard;
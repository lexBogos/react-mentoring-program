import React from 'react';
import FilterPanel from '../../Components/FilterPanel';
import MoviesList from '../../Components/MoviesList';
import ErrorBoundary from '../../Components/ErrorBoundary';
import './index.scss';


const Main = ({movieList, setModalActive, setModalFields, movieListHook}) => 
    <div className='mainContainer'>
        <FilterPanel movieList = {movieList} movieListHook={movieListHook}/>
        <ErrorBoundary>
          <MoviesList movieList = {movieList} setModalActive={setModalActive} setModalFields={setModalFields} movieListHook={movieListHook}/>
        </ErrorBoundary>
    </div>


export default Main;
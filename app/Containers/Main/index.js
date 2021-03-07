import React from 'react';
import FilterPanel from '../../Components/FilterPanel';
import MoviesList from '../../Components/MoviesList';
import ErrorBoundary from '../../Components/ErrorBoundary';
import './index.scss';


const Main = () => 
    <div className='mainContainer'>
        <FilterPanel/>
        <ErrorBoundary>
          <MoviesList/>
        </ErrorBoundary>
    </div>


export default Main;
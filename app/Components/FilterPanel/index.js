import React from 'react';
import { connect } from 'react-redux';
import { sortMovies, filterMovies } from '../../actions';
import './index.scss';

const FilterPanel = ({movies, sortMovies, filterMovies}) => 
    <div className='filterPanel'>
        <div className ='typeList'>
            <a href = '#' onClick={(event) => {
                event.preventDefault();
                filterMovies('ALL');
                }}>ALL</a>
            <a href = '#' onClick={(event) => {
                event.preventDefault();
                filterMovies('DOCUMENTARY');
                }}>DOCUMENTARY</a>
            <a href = '#' onClick={(event) => {
                event.preventDefault();
                filterMovies('COMEDY');
                }}>COMEDY</a>
            <a href = '#' onClick={(event) => {
                event.preventDefault();
                filterMovies('HORROR');
                }}>HORROR</a>
            <a href = '#' onClick={(event) => {
                event.preventDefault();
                filterMovies('CRIME');
                }}>CRIME</a>
        </div>
        <div className='sortFilter'>
            <label htmlFor="filterList" className='sortFilterLabel'>SORT BY</label>
            <select name="filterList" id="filterId" onChange={(e)=>{
                const moviesCopy = JSON.parse(JSON.stringify(movies));
                if(e.target.value==='date'){moviesCopy.sort((a,b) => a.realiseDate - b.realiseDate)};
                if(e.target.value==='name'){moviesCopy.sort((a, b)=>{
                    if(a.title < b.title) { return -1; }
                    if(a.title > b.title) { return 1; }
                    return 0;
                })};
                if(e.target.value==='rate'){moviesCopy.sort((a, b)=>{
                    if(a.rate > b.rate) { return -1; }
                    if(a.rate < b.rate) { return 1; }
                    return 0;
                })};
                    sortMovies(moviesCopy);
                }}>
                <option value="date">RELEASE DATE</option>
                <option value="name">NAME</option>
                <option value="rate">RATE</option>
            </select>
        </div>    
    </div>

const mapStateToProps = ({movies}) => {
    return {
      movies,
    }
  };
  
  const mapDispatchToProps = {sortMovies, filterMovies};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
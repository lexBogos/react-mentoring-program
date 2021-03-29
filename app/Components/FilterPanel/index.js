import React from 'react';
import './index.scss';

const FilterPanel = ({movieList, movieListHook}) => 
    <div className='filterPanel'>
        <div className ='typeList'>
            <a href = ''>ALL</a>
            <a href = ''>DOCUMENTARY</a>
            <a href = ''>COMEDY</a>
            <a href = ''>HORROR</a>
            <a href = ''>CRIME</a>
        </div>
        <div className='sortFilter'>
            <label htmlFor="filterList" className='sortFilterLabel'>SORT BY</label>
            <select name="filterList" id="filterId" onChange={(e)=>{
                if(e.target.value==='date'){movieList.sort((a,b) => a.realiseDate - b.realiseDate)};
                if(e.target.value==='name'){movieList.sort((a, b)=>{
                    if(a.title < b.title) { return -1; }
                    if(a.title > b.title) { return 1; }
                    return 0;
                })};
                movieListHook([...movieList]);
                }}>
                <option value="date">RELEASE DATE</option>
                <option value="name">NAME</option>
                <option value="gross">CUMULATIVE WORLDWIDE GROSS</option>
            </select>
        </div>    
    </div>

export default FilterPanel;
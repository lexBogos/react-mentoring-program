import React from 'react';
import './index.scss';

const FilterPanel = () => 
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
            <select name="filterList" id="filterId">
                <option value="date">RELEASE DATE</option>
                <option value="saab">RATE</option>
                <option value="gross">CUMULATIVE WORLDWIDE GROSS</option>
            </select>
        </div>    
    </div>

export default FilterPanel;
import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';


const SearchPanel = ({onSearchPanelInputChange, searchPanelInputValue}) => {
   const history = useHistory();
    return <>
        <input className='searchInput' placeholder="What do you want to see ?" onChange={(e)=>{onSearchPanelInputChange(e.target.value)}}/>
        <button className='btn btn-1' onClick={() => history.push(`/movie/${searchPanelInputValue}`)}>SEARCH</button>
     </>
}

export default SearchPanel;
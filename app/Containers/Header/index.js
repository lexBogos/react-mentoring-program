import React from 'react';
import SearchPanel from '../../Components/SearchPanel';
import AddMovie from '../../Components/AddMovie';
import './index.scss';


const Header = () =>
    <div className='headerContainer'>
        <h1>Find your movie</h1>
            <div className='searchContainer'>
                <SearchPanel/>
                <AddMovie/>
            </div>
    </div>


export default Header;
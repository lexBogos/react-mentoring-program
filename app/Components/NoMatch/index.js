import React from 'react';
import {
    useLocation
  } from "react-router-dom";
import './index.scss';


const NoMatch = () => {
    let location = useLocation();
    return <>
        <h1>No match for <code>{location.pathname}</code> (Error 404)</h1>
     </>
}


export default NoMatch;
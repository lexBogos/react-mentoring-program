import React from 'react';
import {  MovieStoreServiceConsumer } from '../MovieStoreServiceContext';

const withMovieStoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <MovieStoreServiceConsumer>
        {
          (movieStoreService) => {
            return (<Wrapped {...props}
                movieStoreService={movieStoreService}/>);
          }
        }
      </MovieStoreServiceConsumer>
    );
  }
};

export default withMovieStoreService;

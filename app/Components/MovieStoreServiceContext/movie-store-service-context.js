import React from 'react';

const {
  Provider: MovieStoreServiceProvider,
  Consumer: MovieStoreServiceConsumer
} = React.createContext();

export {
  MovieStoreServiceProvider,
  MovieStoreServiceConsumer
};

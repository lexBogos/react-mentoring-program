import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';
import MovieStoreService from './services/movie-store-service';
import { MovieStoreServiceProvider } from './components/MovieStoreServiceContext';
import './index.scss';

const movieStoreService = new MovieStoreService();

ReactDOM.render(  
    <>
      <Provider store={store}>
        <MovieStoreServiceProvider value={movieStoreService}>
          <App />
        </MovieStoreServiceProvider>
      </Provider>
    </>,
    document.getElementById('root')
  );
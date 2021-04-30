import React from 'react';
import MoviesList from '../../../app/Components/MoviesList/index';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from "redux";
import reducer from "../../../app/reducers/index";
import { Provider } from "react-redux";
import MovieStoreService from '../../../app/services/movie-store-service';
import { MovieStoreServiceProvider } from '../../../app/components/MovieStoreServiceContext';
import { render as rtlRender } from '@testing-library/react';

function render(
    ui,
    {
      initialState,
      store = createStore(reducer, initialState),
      ...renderOptions
    } = {}
  ) {
    function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
  }
  


describe('MoviesList component', () => {

    let onMovieChosen

    const movies = [
        {
            title: 'Goodfellas',
            id: 'tt0099685',
            realiseDate: 1990,
            rate: 4.9
        },
        {
            title: 'Goodfellas',
            id: 'tt0133093',
            realiseDate: 1999,
            rate: 5
        },
        {
            title: 'Terminator 2: Judgment Day',
            id: 'tt0103064',
            realiseDate: 1991,
            rate: 5
        },
        {
            title: 'Modern Times',
            id: 'tt0027977',
            realiseDate: 1936,
            rate: 4.2
        },
        {
            title: 'Memento',
            id: 'tt0209144',
            realiseDate: 2000,
            rate: 4
        },
        {
            title: 'Dune',
            id: 'tt1160419',
            realiseDate: 2021,
            rate: 3.8
        },  
      ];

    beforeEach(()=>{
        onMovieChosen = jest.fn();
    });

    const movieStoreService = new MovieStoreService();

        it('should return component with MoviesList component if modalActionType is "REMOVE_MOVIE"', () => {
            const { asFragment } = render(<MovieStoreServiceProvider value={movieStoreService}><MoviesList/></MovieStoreServiceProvider>, { initialState: { loading:false, chosenMovieIndex: 0, movies: movies, movieStoreService:movieStoreService } });

            expect(asFragment(<MoviesList/>)).toMatchSnapshot();
        });
})
import React from 'react';
import  Modal from '../../../app/Components/Modal/index';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from "redux";
import reducer from "../../../app/reducers/index";
import { Provider } from "react-redux";
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

describe('Modal component', () => {

    let closeModal;
    let preventDefault;

    beforeEach(()=>{
        closeModal = jest.fn();
        preventDefault = jest.fn();
    });

    const movies = [
        {
            title: 'Goodfellas',
            id: 'tt0099685',
            realiseDate: 1990,
            rate: 4.9,
            genre: 'Biography, Crime, Drama',

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

    
    it('should return component without content if there is no modalActionType', () => {

        const { asFragment } = render(<Modal movies={movies} closeModal={closeModal} modalActive={true}/>, { initialState: { user: 'Redux User' } });

        expect(asFragment(<Modal/>)).toMatchSnapshot();
    });

    it('should return component with EditMovieModalFields component if modalActionType is "EDIT_MOVIE"', () => {

        const { asFragment } = render(<Modal/>, { initialState: { movies:movies, closeModal:closeModal, modalActive:true, chosenMovieIndex: 0, modalActionType: 'EDIT_MOVIE' } });

        expect(asFragment(<Modal/>)).toMatchSnapshot();
    });

    it('should return component with DeleteMovieModalFields component if modalActionType is "REMOVE_MOVIE"', () => {

        const { asFragment } = render(<Modal/>, { initialState: { closeModal:closeModal, modalActive:true, chosenMovieIndex: 0, modalActionType: 'REMOVE_MOVIE' } });

        expect(asFragment(<Modal/>)).toMatchSnapshot();
    });

    it('should return component with AddMovieModalFields component if modalActionType is "MOVIE_ADD"', () => {

        const { asFragment } = render(<Modal/>, { initialState: { closeModal:closeModal, modalActive:true, chosenMovieIndex: 0, modalActionType: 'MOVIE_ADD' } });

        expect(asFragment(<Modal/>)).toMatchSnapshot();
    });
})
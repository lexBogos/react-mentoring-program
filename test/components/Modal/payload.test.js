import React from 'react';
import { AddMovieModalFields, EditMovieModalFields, DeleteMovieModalFields } from '../../../app/Components/Modal/payload';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent } from '@testing-library/react'



describe('Payload for Modal component', () => {

    let movieStoreService;
    let onMovieEdit;
    let onModalDisable;
    let onMovieAdd;
    let handleSubmit;
    let onMovieRemove;

    beforeEach(()=>{
        movieStoreService = {updateMovieData: ()=>{return Promise.resolve('result')}, removeMovie: ()=>{return Promise.resolve('result')}};
        onMovieEdit = jest.fn();
        onModalDisable = jest.fn();
        onMovieAdd=jest.fn();
        handleSubmit = jest.fn();
        onMovieRemove = jest.fn();
    });

    const movies = [
        {
            title: 'Goodfellas',
            id: 'tt0099685',
            realiseDate: 1990,
            rate: 4.9,
            genre: 'Biography, Crime, Drama',
            movieUrl: 'http',
            description:'description'
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

    it('click on submit button in the EditMovie form should trigger onSubmit action', async () => {
         
        const { container } = render(<EditMovieModalFields
                onSubmit={handleSubmit}
                data={movies[0]}
                movieStoreService={movieStoreService}
                onMovieEdit={onMovieEdit}
                onModalDisable={onModalDisable}
                 />)  

        await waitFor(() => {         
        fireEvent.change(container.querySelector('input[name="title"]'), {target:{value:'Goodfellas'}})
        });
        await waitFor(() => {         
            fireEvent.change(container.querySelector('input[name="description"]'), {target:{value:'Description'}})
        });
        await waitFor(() => {         
            fireEvent.change(container.querySelector('input[name="movieUrl"]'), {target:{value:'http'}})
        });
        await waitFor(() => {         
            fireEvent.change(container.querySelector('input[name="realiseDate"]'), {target:{value:'1999'}})
        });
        await waitFor(() => {         
            fireEvent.change(container.querySelector('input[name="rate"]'), {target:{value:'5.0'}})
        });
      
        await waitFor(() => {fireEvent.click(container.querySelector('button[type="submit"]'))});
      
        expect(onModalDisable.mock.calls.length).toEqual(1);
        expect(onMovieEdit.mock.calls.length).toEqual(1);
    });

    it('click on RESET button in the EditMovie form should trigger onModalDisable action', async() => {
        const { container } = render(<EditMovieModalFields
                onSubmit={handleSubmit}
                data={movies[0]}
                movieStoreService={movieStoreService}
                onMovieEdit={onMovieEdit}
                onModalDisable={onModalDisable}
                 />)  
        const resetButton = container.querySelectorAll('button')[1];
        await waitFor(() => {fireEvent.click(resetButton)});
        expect(onModalDisable.mock.calls.length).toEqual(1);
    });

    it('click on submit button in the AddMovie form should trigger onSubmit action', async () => {
         
        const { container } = render(<AddMovieModalFields
                onSubmit={handleSubmit}
                data={movies[0]}
                movieStoreService={movieStoreService}
                onMovieAdd={onMovieAdd}
                 />)

        await waitFor(() => {         
            fireEvent.change(container.querySelector('input[name="title"]'), {target:{value:'Goodfellas'}})
        });
        await waitFor(() => {         
            fireEvent.change(container.querySelector('input[name="description"]'), {target:{value:'Description'}})
        });
        await waitFor(() => {         
            fireEvent.change(container.querySelector('input[name="movieUrl"]'), {target:{value:'http'}})
        });
        await waitFor(() => {         
            fireEvent.change(container.querySelector('input[name="realiseDate"]'), {target:{value:'1999'}})
        });
        await waitFor(() => {         
            fireEvent.change(container.querySelector('input[name="rate"]'), {target:{value:'5.0'}})
        });
      
        await waitFor(() => {fireEvent.click(container.querySelector('button[type="submit"]'))});
      
        expect(onMovieAdd.mock.calls.length).toEqual(1);
    });

    it('click on submit button in the AddMovie form should trigger onSubmit action', async () => {
         
        const { container } = render(<DeleteMovieModalFields
                onSubmit={handleSubmit}
                movieStoreService={movieStoreService}
                onMovieRemove={onMovieRemove}
                 />)
      
        await waitFor(() => {fireEvent.click(container.querySelector('button'))});
      
        expect(onMovieRemove.mock.calls.length).toEqual(1);
    });

   


})
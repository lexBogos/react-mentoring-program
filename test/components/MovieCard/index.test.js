import React from 'react';
import MovieCard from '../../../app/Components/MovieCard/index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{ shallow } from 'enzyme';
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

let onMovieChosen;
let preventDefault;


const movie =  {
    title: 'Goodfellas',
    id: 'tt0099685',
    realiseDate: 1990,
    rate: 4.9
}


beforeEach(()=>{
    onMovieChosen = jest.fn(e=>e);
    preventDefault = jest.fn()
});

describe('MovieCard component', () => {
        it('render MovieCard component toMatchSnapshot', () => {
            const MovieCardObj = shallow(<MovieCard movie={movie} onMovieChosen={onMovieChosen}/>);
            
            expect(MovieCardObj.debug()).toMatchSnapshot();
        })

        it('render MovieCard component toMatchSnapshot', async () => {

            window.scrollTo = jest.fn();

            const { container } = render(<MovieCard movie={movie} onMovieChosen={onMovieChosen}/>);
            await waitFor(() => {fireEvent.click(container.querySelectorAll('a')[0])});
            await waitFor(() => {fireEvent.click(container.querySelectorAll('a')[1])});
        })
})

import React from 'react';
import MovieDetails from '../../../app/Components/MovieDetails/index';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{ shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';


Enzyme.configure({ adapter: new Adapter() });

describe('MovieDetails component', () => {

    let clearMovieInfoPanel;
    let movie;


    beforeEach(()=>{
        clearMovieInfoPanel = jest.fn(e=>e);
        movie = {
                    title: 'Goodfellas',
                    id: 'tt0099685',
                    realiseDate: 1990,
                    rate: 4.9
                }  
        });




    it('render MovieDetails component toMatchSnapshot', () => {
        const { asFragment } = render(<Router><MovieDetails movie={movie} clearMovieInfoPanel={clearMovieInfoPanel}/></Router>);
        
        expect(asFragment(<MovieDetails/>)).toMatchSnapshot();
    })


    it('click on the first "close" link should dispatch an event', () => {

        const MovieDetailsObj = shallow(<MovieDetails movie={movie} clearMovieInfoPanel={clearMovieInfoPanel}/>)
        MovieDetailsObj.find('.closeMovieDetails').simulate('click');

        expect(clearMovieInfoPanel.mock.calls.length).toEqual(1);
    });

    it('click on the second "close" link should dispatch an event', () => {

        const MovieDetailsObj = shallow(<MovieDetails movie={undefined} clearMovieInfoPanel={clearMovieInfoPanel}/>)
        MovieDetailsObj.find('.closeMovieDetails').simulate('click');

        expect(clearMovieInfoPanel.mock.calls.length).toEqual(1);
    });

    it('should update document ', async () => {

        const container = document.createElement("div");
        document.body.appendChild(container);

        await waitFor(() => render(<Router><MovieDetails movie={movie} clearMovieInfoPanel={clearMovieInfoPanel}/></Router>, container));
        
        expect(document.querySelector('head').firstChild.innerHTML).toEqual('Goodfellas')

    });

    it('click on MovieDetails button should dispatch event after click on the 4-st link', async () => {

        const container = document.createElement("div");
        document.body.appendChild(container);

        await waitFor(() => render(<Router><MovieDetails movie={undefined} clearMovieInfoPanel={clearMovieInfoPanel}/></Router>, container));
        
        expect(document.querySelector('head').firstChild.innerHTML).toEqual('moviePortal')

    });
})
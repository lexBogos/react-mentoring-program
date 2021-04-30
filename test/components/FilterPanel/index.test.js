import React from 'react';
import  ReactComponent from '../../../app/Components/FilterPanel/index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


Enzyme.configure({ adapter: new Adapter() });

describe('FilterPanel component', () => {

    const FilterPanel = ReactComponent.WrappedComponent;
    let sortMovies;
    let filterMovies;
    let preventDefault;

    beforeEach(()=>{
        sortMovies = jest.fn(e=>e);
        filterMovies = jest.fn();
        preventDefault = jest.fn();
    });



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

    it('render AddMovie component toMatchSnapshot', () => {
        const { asFragment } = render(<FilterPanel movies={movies} sortMovies={sortMovies} filterMovies={filterMovies}/>);
        
        expect(asFragment(<FilterPanel/>)).toMatchSnapshot();
    })

    it('click on AddMovie button should dispatch event after click on the 1-st link', () => {

        const FilterPanelObj = shallow(<FilterPanel movies={movies} sortMovies={sortMovies} filterMovies={filterMovies}/>)
        FilterPanelObj.find('.filterLink').at(0).simulate('click', { preventDefault });

        expect(filterMovies.mock.calls.length).toEqual(1);
    });

    it('click on AddMovie button should dispatch event after click on the 2-nd link', () => {

        const FilterPanelObj = shallow(<FilterPanel movies={movies} sortMovies={sortMovies} filterMovies={filterMovies}/>)
        FilterPanelObj.find('.filterLink').at(1).simulate('click', { preventDefault });

        expect(filterMovies.mock.calls.length).toEqual(1);
    });

    it('click on AddMovie button should dispatch event after click on the 3-rd link', () => {

        const FilterPanelObj = shallow(<FilterPanel movies={movies} sortMovies={sortMovies} filterMovies={filterMovies}/>)
        FilterPanelObj.find('.filterLink').at(2).simulate('click', { preventDefault });

        expect(filterMovies.mock.calls.length).toEqual(1);
    });

    it('click on AddMovie button should dispatch event after click on the 4-th link', () => {

        const FilterPanelObj = shallow(<FilterPanel movies={movies} sortMovies={sortMovies} filterMovies={filterMovies}/>)
        FilterPanelObj.find('.filterLink').at(3).simulate('click', { preventDefault });

        expect(filterMovies.mock.calls.length).toEqual(1);
    });

    it('click on AddMovie button should dispatch event after click on the 5-th link', () => {

        const FilterPanelObj = shallow(<FilterPanel movies={movies} sortMovies={sortMovies} filterMovies={filterMovies}/>)
        FilterPanelObj.find('.filterLink').at(4).simulate('click', { preventDefault });

        expect(filterMovies.mock.calls.length).toEqual(1);
    });

    it('click on AddMovie button should dispatch event after click on the list 1-st elem', () => {

        const FilterPanelObj = shallow(<FilterPanel movies={movies} sortMovies={sortMovies} filterMovies={filterMovies}/>)
        FilterPanelObj.find('.filterList').at(0).simulate('change', {
            target: { value: 'date'}
        });

        expect(sortMovies.mock.calls.length).toEqual(1);
    });

    it('click on AddMovie button should dispatch event after click on the list 2-nd elem', () => {

        const FilterPanelObj = shallow(<FilterPanel movies={movies} sortMovies={sortMovies} filterMovies={filterMovies}/>)
        FilterPanelObj.find('.filterList').at(0).simulate('change', {
            target: { value: 'name'}
        });

        expect(sortMovies.mock.calls.length).toEqual(1);
    });

    it('click on AddMovie button should dispatch event after click on the list 3-rd elem', () => {

        const FilterPanelObj = shallow(<FilterPanel movies={movies} sortMovies={sortMovies} filterMovies={filterMovies}/>)
        FilterPanelObj.find('.filterList').at(0).simulate('change', {
            target: { value: 'rate'}
        });

        expect(sortMovies.mock.calls.length).toEqual(1);
    });

})
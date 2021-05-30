import React from 'react';
import AddMovie from '../../../app/Components/AddMovie/index';
import { render } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{ shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

describe('AddMovie component', () => {
        it('render AddMovie component toBeInTheDocument example', () => {
            const { getByText } = render(<AddMovie/>);
            const element = getByText('+ ADD MOVIE');

            expect(element).toBeInTheDocument();
        })

        it('render AddMovie component toMatchSnapshot', () => {
            const { asFragment } = render(<AddMovie/>);
            
            expect(asFragment(<AddMovie/>)).toMatchSnapshot();
        })

        it('click on AddMovie button should dispatch event', () => {

                const mockCallBack = jest.fn();
                render(<AddMovie onMovieChosen={mockCallBack}/>);
                const addMovieComponent = shallow(<AddMovie onMovieChosen={mockCallBack}/>);
                addMovieComponent.find('button').simulate('click');
    
                expect(mockCallBack.mock.calls.length).toEqual(1);
        })
})
import React from 'react';
import Footer from '../../../app/containers/Footer/index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{ shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer component', () => {
        it('render Footer component toMatchSnapshot', () => {
            expect(shallow(<Footer/>).debug()).toMatchSnapshot();
        })
})
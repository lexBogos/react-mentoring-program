import React from 'react';
import App from '../../../app/containers/App/index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{ shallow } from 'enzyme';
import store from '../../../app/store';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
        it('render App component toMatchSnapshot', () => {
            expect(shallow(<App store={store}/>).debug()).toMatchSnapshot();
        })
})
import React from 'react';
import NoMatch from '../../../app/Components/NoMatch/index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{ mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/another-route',
      search: '',
      hash: '',
      state: null,
      key: '5nvxpbdafa',
    }),
}));

describe('NoMatch component', () => {

        it('render NoMatch component toMatchSnapshot', () => {
            expect(mount(<NoMatch/>).debug()).toMatchSnapshot();
        })

})
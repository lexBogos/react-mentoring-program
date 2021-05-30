import React from 'react';
import ErrorBoundary from '../../../app/Components/ErrorBoundary/index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{ mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

const Something = () => <h1>Smth went wrong!</h1>;

describe('ErrorBoundary component', () => {
    it('should display an ErrorMessage if wrapped component throws', () => {
        const wrapper = mount(
          <ErrorBoundary>
            <Something />
          </ErrorBoundary>
        );
    
        const error = new Error('test');
    
        expect(wrapper.find(Something).simulateError(error).debug()).toMatchSnapshot();
       
      })
})

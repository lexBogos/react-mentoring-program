import React from 'react';
import Header from '../../../app/containers/Header/index';
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

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: '5nvxpbdafa',
    }),
    useHistory: jest.fn().mockReturnValue({
        pathname: '/',
        search: '',
        hash: '',
        state: null,
        key: '5nvxpbdafa',
      }),
}));

describe('Header component', () => {
    it('render Header component toMatchSnapshot', () => {
        const { asFragment } = render((<Header/>));
        expect(asFragment(<Header/>)).toMatchSnapshot();
    })
})
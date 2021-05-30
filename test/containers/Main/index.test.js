import React from 'react';
import Main from '../../../app/containers/Main/index';
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

describe('Main component', () => {
        it('render Main component toMatchSnapshot', () => {
            const { asFragment } = render((<Main/>));
            expect(asFragment(<Main/>)).toMatchSnapshot();
        })
})
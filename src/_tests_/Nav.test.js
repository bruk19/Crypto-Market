import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Nav from '../Components/Nav';

it('Test if Nav render correctly', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});

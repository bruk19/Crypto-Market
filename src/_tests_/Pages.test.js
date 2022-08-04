import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Pages from '../Components/CryptosPage';

it('Test if The CryptoPage render correctly', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});

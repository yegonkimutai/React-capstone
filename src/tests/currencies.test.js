import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Currencies from '../components/Currencies';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Currencies', () => {
  test('Render Currencies Component', () => {
    const tree = TestRenderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Currencies />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

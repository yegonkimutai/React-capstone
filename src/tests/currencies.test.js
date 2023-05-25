import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import Currencies from '../components/Currencies';
import '@testing-library/jest-dom/extend-expect';

describe('Currencies content', () => {
  test('Render Correct Details', () => {
    render(
      <Router>
        <Provider store={store}>
          <Currencies />
        </Provider>
      </Router>,
    );
    const pageTitle = screen.getByText('Currency Tracker');
    expect(pageTitle).toBeInTheDocument();

    const placeHolder = screen.getByPlaceholderText('Search currency...');
    expect(placeHolder).toBeInTheDocument();
  });
});

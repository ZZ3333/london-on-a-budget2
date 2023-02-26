import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/London on a Budget/);
  expect(linkElement).toBeInTheDocument();
});

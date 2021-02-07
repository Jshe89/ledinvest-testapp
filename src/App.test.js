import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loans', () => {
  render(<App />);
  const linkElement = screen.getByText(/current loans/i);
  expect(linkElement).toBeInTheDocument();
});

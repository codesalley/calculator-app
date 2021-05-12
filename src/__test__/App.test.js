import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('calculator page and display page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Magicians/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders calculator page and not 404 page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Magicians/i);
  expect(linkElement).not.toContain('401' || 'not found');
});

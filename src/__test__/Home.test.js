import { render, screen } from '@testing-library/react';
import HomePage from '../components/Home';

test('renders Homepage not 404 page', () => {
  render(<HomePage />);
  const res = screen;
  expect(res).not.toBeNull();
});

test('renders Homepage properly and show header image', () => {
  render(<HomePage />);
  const res = screen.getAllByAltText(/intro-logo/i);
  expect(res[0]).toHaveClass('intro-logo');
});

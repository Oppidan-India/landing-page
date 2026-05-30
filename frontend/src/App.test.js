import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Oppidan India homepage', () => {
  render(<App />);
  expect(screen.getByText(/Building Future Leaders Through/i)).toBeInTheDocument();
});

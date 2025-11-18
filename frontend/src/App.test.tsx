import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The nein app', () => {
  it('should render the Orders Link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  it('should render the Payments Link', () => {
    render(<App />);
    expect(screen.getByText('Payments')).toBeInTheDocument();
  });
  it('should render the Home Link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('should render the Home header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import LeagueTile from '../LeagueTile';

describe('LeagueTile', () => {
  it('renders the 5 league tiles', () => {
    const { getByTestId } = render(<LeagueTile />);

    expect(getByTestId('premier-league-link')).toBeInTheDocument();
    expect(getByTestId('laliga-link')).toBeInTheDocument();
    expect(getByTestId('seriea-link')).toBeInTheDocument();
    expect(getByTestId('bundesliga-link')).toBeInTheDocument();
    expect(getByTestId('ligue1-link')).toBeInTheDocument();
  });
});

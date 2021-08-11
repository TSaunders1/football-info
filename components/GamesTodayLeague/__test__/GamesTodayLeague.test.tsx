import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MOCKpremGamesToday } from '../../../MOCKDATA/MOCKgamesToday';
import GamesTodayLeague from '../GamesTodayLeague';

describe('GamesTodayLeague', () => {
  it('the correct message is rendered if there are 0 matches', () => {
    render(<GamesTodayLeague matches={[]} />);

    expect(screen.getByText('There are no matches today')).toBeInTheDocument();
  });

  it('renders matches', () => {
    render(<GamesTodayLeague matches={MOCKpremGamesToday} />);
    const gamesTodayLeague = screen.getByTestId('games-today-league');

    const matches = within(gamesTodayLeague).getAllByTestId('match');
    expect(matches.length).toBe(2);
  });
});

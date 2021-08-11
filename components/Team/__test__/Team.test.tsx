import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Team from '../Team';
import mockManCityTeam from '../../../MOCKDATA/MOCKmanCityTeam';

describe('Team', () => {
  it('it renders the squad', () => {
    render(<Team team={mockManCityTeam} />);
    const team = screen.getByTestId('squad');

    const players = within(team).getAllByTestId('player');
    expect(players.length).toBe(28);
  });

  it('renders the correct team information', () => {
    const { getByTestId } = render(<Team team={mockManCityTeam} />);

    expect(getByTestId('club-name')).toHaveTextContent('Manchester City FC');
    expect(getByTestId('club-colors')).toHaveTextContent('Sky Blue / White');
    expect(getByTestId('founded')).toHaveTextContent('1880');
    expect(getByTestId('venue')).toHaveTextContent('Etihad Stadium');
    expect(getByTestId('website')).toHaveTextContent('Club Website: https://www.mancity.com');
  });
});

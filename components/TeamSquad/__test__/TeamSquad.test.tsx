import React from 'react';
import { render, screen, within } from '@testing-library/react';
import TeamSquad from '../TeamSquad';
import mockManCityTeam from '../../../mockData/mockManCityTeam';

describe('TeamSquad', () => {
  it('it renders the squad', () => {
    render(<TeamSquad team={mockManCityTeam} />);
    const team = screen.getByTestId('squad');

    const players = within(team).getAllByTestId('player');
    expect(players.length).toBe(28);
  });
});

import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Table from '../Table';
import mockPremierLeagueTable from '../../../mockData/mockPremierLeagueTable';

describe('Table', () => {
  it('it renders the table', () => {
    render(<Table table={mockPremierLeagueTable} />);
    const table = screen.getByTestId('table');

    const teams = within(table).getAllByTestId('team');
    expect(teams.length).toBe(20);
  });
});

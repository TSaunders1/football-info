import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Table from '../Table';
import { MOCKpremierLeagueTable } from '../../../MOCKDATA/MOCKpremierLeagueTable';

describe('Table', () => {
  it('it renders the table', () => {
    render(<Table table={MOCKpremierLeagueTable.standings[0].table} />);
    const table = screen.getByTestId('table');

    const teams = within(table).getAllByTestId('team');
    expect(teams.length).toBe(20);
  });
});

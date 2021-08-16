import React from 'react';
import { render } from '@testing-library/react';
import mockPremierLeagueTable from '../../../mockData/mockPremierLeagueTable';
import TableRow from '../TableRow';

describe('TableRow', () => {
  it('the correct TableRow information is rendered', () => {
    const { getByTestId } = render(<TableRow club={mockPremierLeagueTable[0]} />);

    expect(getByTestId('position')).toHaveTextContent('8');
    expect(getByTestId('crest')).toBeInTheDocument();
    expect(getByTestId('team-name')).toHaveTextContent('Arsenal');
    expect(getByTestId('games-played')).toHaveTextContent('38');
    expect(getByTestId('games-won')).toHaveTextContent('14');
    expect(getByTestId('games-drawn')).toHaveTextContent('14');
    expect(getByTestId('games-lost')).toHaveTextContent('10');
    expect(getByTestId('goals-for')).toHaveTextContent('56');
    expect(getByTestId('goals-against')).toHaveTextContent('48');
    expect(getByTestId('goals-difference')).toHaveTextContent('8');
    expect(getByTestId('points')).toHaveTextContent('56');
  });
});

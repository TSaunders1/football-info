import React from 'react';
import { render } from '@testing-library/react';
import { sortedMockPremTable } from '../../../MOCKDATA/MOCKpremierLeagueTable';
import TableRow from '../TableRow';

describe('TableRow', () => {
  it('the correct TableRow information is rendered', () => {
    const { getByTestId } = render(<TableRow club={sortedMockPremTable[0]} />);

    expect(getByTestId('position')).toHaveTextContent('1');
    expect(getByTestId('crest')).toBeInTheDocument();
    expect(getByTestId('team-name')).toHaveTextContent('Liverpool FC');
    expect(getByTestId('games-played')).toHaveTextContent('38');
    expect(getByTestId('games-won')).toHaveTextContent('32');
    expect(getByTestId('games-drawn')).toHaveTextContent('3');
    expect(getByTestId('games-lost')).toHaveTextContent('3');
    expect(getByTestId('goals-for')).toHaveTextContent('85');
    expect(getByTestId('goals-against')).toHaveTextContent('33');
    expect(getByTestId('goals-difference')).toHaveTextContent('52');
    expect(getByTestId('points')).toHaveTextContent('99');
  });
});

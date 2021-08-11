import React from 'react';
import { render } from '@testing-library/react';
import { MOCKgamesToday } from '../../../MOCKDATA/MOCKgamesToday';
import Match from '../Match';

describe('Match', () => {
  it('the correct match information is rendered', () => {
    const { getByTestId } = render(<Match match={MOCKgamesToday[0]} />);

    expect(getByTestId('teams')).toHaveTextContent('Liverpool vs Manchester City');
    expect(getByTestId('score')).toHaveTextContent('0 - 0');
    expect(getByTestId('kickoff')).toHaveTextContent('17:00');
    expect(getByTestId('competition')).toHaveTextContent('Premier League');
  });
});

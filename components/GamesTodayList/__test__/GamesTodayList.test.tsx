import React from 'react';
import { render } from '@testing-library/react';
import { MOCKgamesToday } from '../../../MOCKDATA/MOCKgamesToday';
import GamesTodayList from '../GamesTodayList';

describe('GamesTodayList', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<GamesTodayList matches={MOCKgamesToday} />);

    expect(getByTestId('GamesTodayList')).toBeInTheDocument();
  });

  it('renders the correct count of games', () => {
    const { getByTestId } = render(<GamesTodayList matches={MOCKgamesToday} />);

    expect(getByTestId('count')).toHaveTextContent('There are 6 games today:');
  });
});

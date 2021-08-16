import React from 'react';
import { render } from '@testing-library/react';
import { mockGamesToday } from '../../../mockData/mockGamesToday';
import GamesTodayList from '../GamesTodayList';

describe('GamesTodayList', () => {
  it('renders the correct number of games', () => {
    const { getByTestId } = render(<GamesTodayList matches={mockGamesToday} />);

    expect(getByTestId('GamesTodayList')).toBeInTheDocument();
    expect(getByTestId('count')).toHaveTextContent('There are 6 games today');
  });
});

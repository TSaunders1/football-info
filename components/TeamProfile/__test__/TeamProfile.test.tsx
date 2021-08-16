import React from 'react';
import { render } from '@testing-library/react';
import TeamProfile from '../TeamProfile';
import mockManCityTeam from '../../../mockData/mockManCityTeam';

describe('TeamProfile', () => {
  it('renders the correct team information', () => {
    const { getByTestId } = render(<TeamProfile team={mockManCityTeam} />);

    expect(getByTestId('club-name')).toHaveTextContent('Manchester City FC');
    expect(getByTestId('club-colors')).toHaveTextContent('Sky Blue / White');
    expect(getByTestId('founded')).toHaveTextContent('1880');
    expect(getByTestId('venue')).toHaveTextContent('Etihad Stadium');
    expect(getByTestId('website')).toHaveTextContent('Club Website: https://www.mancity.com');
  });
});

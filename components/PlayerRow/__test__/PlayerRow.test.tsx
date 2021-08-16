import React from 'react';
import { render } from '@testing-library/react';
import mockManCityTeam from '../../../mockData/mockManCityTeam';
import PlayerRow from '../PlayerRow';

describe('PlayerRow', () => {
  it('the correct PlayerRow information is rendered', () => {
    const { getByTestId } = render(<PlayerRow player={mockManCityTeam.squad[0]} />);

    expect(getByTestId('shirt-number')).toHaveTextContent('27');
    expect(getByTestId('player-name')).toHaveTextContent('João Cancelo');
    expect(getByTestId('position')).toHaveTextContent('Defender');
    expect(getByTestId('nationality')).toHaveTextContent('Portugal');
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { BigTeamLinks, bigTeams } from '../BigTeamLinks';

describe('BigTeamLinks', () => {
  it('the correct teams are rendered', () => {
    const { getByTestId } = render(<BigTeamLinks />);
    bigTeams.forEach((team) => expect(getByTestId(team.link)).toHaveTextContent(team.name));
  });
});

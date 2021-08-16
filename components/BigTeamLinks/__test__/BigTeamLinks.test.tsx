import React from 'react';
import { render } from '@testing-library/react';
import { BigTeamLinks } from '../BigTeamLinks';
import { bigTeams } from '../../../constants/BigTeams.constants';

describe('BigTeamLinks', () => {
  it('the correct teams are rendered', () => {
    const { getByTestId } = render(<BigTeamLinks />);
    bigTeams.forEach((team) => expect(getByTestId(team.link)).toHaveTextContent(team.name));
  });
});

import React from 'react';
import { MatchesType } from '../../types';
import getKickOffTime from './Match.utils';

type Props = {
  match: MatchesType;
};

const Match: React.FC<Props> = ({ match }) => (
  <tr key={match.id} data-testid="match">
    <td data-testid="teams" className="pv3 pr3 bb b--black-20 tl">
      {match.homeTeam.name}
      {' '}
      vs
      {' '}
      {match.awayTeam.name}
    </td>
    <td data-testid="score" className="pv3 pr3 bb b--black-20 tl">
      {match.score.fullTime.homeTeam ?? 0}
      {' '}
      -
      {' '}
      {match.score.fullTime.awayTeam ?? 0}
    </td>
    <td data-testid="kickoff" className="pv3 pr3 bb b--black-20 tl">
      {getKickOffTime(match.utcDate)}
    </td>
    <td data-testid="competition" className="pv3 pr3 bb b--black-20 tl">
      {match.competition.name}
    </td>
  </tr>
);

export default Match;

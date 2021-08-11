import React from 'react';
import { MatchesType } from '../../types';

import Match from '../Match/Match';

type Props = {
  matches: MatchesType[];
};

const GamesTodayLeague: React.FC<Props> = ({ matches }) => {
  if (matches.length === 0) return <h4 data-testid="nomatches">There are no matches today</h4>;

  return (
    <div className="pa4" data-testid="games-today-league">
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Game</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Score</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Kick Off (Local Time)</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Competition</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {matches.map((match) => (
              <Match match={match} key={match.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GamesTodayLeague;

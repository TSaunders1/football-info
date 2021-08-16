import React from 'react';
import Link from 'next/link';
import { MatchesType } from '../../types';
import GamesTodayLeague from '../GamesTodayLeague/GamesTodayLeague';
import filterMatches from './GamesTodayList.utils';
import bigLeagues from '../../constants/BigLeague.constants';

type Props = {
  matches: MatchesType[];
};

const GamesTodayList: React.FC<Props> = ({ matches }) => {
  const count = matches.length;

  return (
    <div data-testid="GamesTodayList" className="tc">
      <h1 data-testid="count" className="pa1">
        {`There ${count === 1 ? 'is' : 'are'} ${count} game${count === 1 ? '' : 's'} today`}
      </h1>
      {bigLeagues.map((league) => (
        <span key={league.id}>
          <Link href={`/leaguetables/${league.link}`}>
            <span className="f3 link dim black b pointer">{league.title}</span>
          </Link>
          <GamesTodayLeague matches={filterMatches(matches, league.id)} />
        </span>
      ))}
      <h2>Other:</h2>
      <GamesTodayLeague matches={filterMatches(matches)} />
    </div>
  );
};

export default GamesTodayList;

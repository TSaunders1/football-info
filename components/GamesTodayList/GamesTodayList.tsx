import React from 'react';
import Link from 'next/link';
import { MatchesType } from '../../types';
import GamesTodayLeague from '../GamesTodayLeague/GamesTodayLeague';
import { filterMatchesByComp, filterMatchesByOther, lookUpTable } from './GamesTodayList.utils';

type Props = {
  matches: MatchesType[];
};

const GamesTodayList: React.FC<Props> = ({ matches }) => {
  const count = matches.length;

  return (
    <div data-testid="GamesTodayList" className="tc">
      <h1 data-testid="count" className="pa1">
        There are
        {' '}
        {count}
        {' '}
        games today:
        {' '}
      </h1>
      <div>
        <Link href="/leaguetables/premierleague">
          <span className="f3 link dim black b pointer">Premier League:</span>
        </Link>
        <GamesTodayLeague matches={filterMatchesByComp(matches, lookUpTable.premierleague)} />
      </div>
      <div>
        <Link href="/leaguetables/laliga">
          <span className="f3 link dim black b pointer">La Liga:</span>
        </Link>
        <GamesTodayLeague matches={filterMatchesByComp(matches, lookUpTable.laliga)} />
      </div>
      <div>
        <Link href="/leaguetables/seriea">
          <span className="f3 link dim black b pointer">Serie A:</span>
        </Link>
        <GamesTodayLeague matches={filterMatchesByComp(matches, lookUpTable.seriea)} />
      </div>
      <div>
        <Link href="/leaguetables/bundesliga">
          <span className="f3 link dim black b pointer">Bundesliga:</span>
        </Link>
        <GamesTodayLeague matches={filterMatchesByComp(matches, lookUpTable.bundesliga)} />
      </div>
      <div>
        <Link href="/leaguetables/ligue1">
          <span className="f3 link dim black b pointer">Ligue 1:</span>
        </Link>
        <GamesTodayLeague matches={filterMatchesByComp(matches, lookUpTable.ligue1)} />
      </div>
      <div>
        <h2>Other:</h2>
        <GamesTodayLeague matches={filterMatchesByOther(matches)} />
      </div>
    </div>
  );
};

export default GamesTodayList;

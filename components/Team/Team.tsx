import React from 'react';
import { TeamType, SquadEntity } from '../../types';
import PlayerRow from '../PlayerRow/PlayerRow';

type Props = {
  team: TeamType;
};
const Team: React.FC<Props> = ({ team }) => {
  const {
    name, id, squad, clubColors, founded, venue, website,
  } = team;

  return (
    <div>
      <div className="fl w-100 w-third-l tc pa3">
        <h1 data-testid="club-name">{name}</h1>
        <img src={`https://crests.football-data.org/${id}.svg`} alt={`${name} crest`} height="150" />
        <h3 data-testid="club-colors">
          <span>
            Club Colours:
            {' '}
            <span className="i red">{clubColors}</span>
          </span>
        </h3>
        <h3 data-testid="founded">
          <span>Year Founded:</span>
          {' '}
          <span className="i red">{founded}</span>
        </h3>
        <h3 data-testid="venue">
          <span>Home Ground:</span>
          {' '}
          <span className="i red">{venue}</span>
        </h3>
        <h3 data-testid="website">
          <a href={website}>
            <span>Club Website:</span>
            {' '}
            <span className="i red underline">{website}</span>
          </a>
        </h3>
      </div>
      <div className="fl w-100 w-two-thirds-l">
        <h1 className="tc">Squad:</h1>
        <table className="f6 w-100 mw8 center pa3" cellSpacing="0" data-testid="squad">
          <thead>
            <tr>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Player</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Position</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Nationality</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {squad
              ?.sort((a: SquadEntity, b: SquadEntity) => {
                if (a.shirtNumber === null || undefined) {
                  return 1;
                } if (b.shirtNumber === null || undefined) {
                  return -1;
                }
                return (a?.shirtNumber ?? 0) < (b?.shirtNumber ?? 0) ? -1 : 1;
              })
              .map((player: SquadEntity) => <PlayerRow player={player} key={player.id} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;

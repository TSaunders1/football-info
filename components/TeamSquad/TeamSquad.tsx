import React from 'react';
import { SquadEntity, TeamType } from '../../types';
import PlayerRow from '../PlayerRow/PlayerRow';
import sortSquad from './TeamSquad.utils';

type Props = {
  team: TeamType;
};

const TeamSquad: React.FC<Props> = ({ team }) => {
  const sortedSquad = sortSquad(team.squad);
  return (
    <span className="fl w-100 w-two-thirds-l">
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
          {sortedSquad?.map((player: SquadEntity) => (
            <PlayerRow player={player} key={player.id} />
          ))}
        </tbody>
      </table>
    </span>
  );
};

export default TeamSquad;

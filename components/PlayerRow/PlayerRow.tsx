import React from 'react';
import { SquadEntity } from '../../types';

type Props = {
  player: SquadEntity;
};

const PlayerRow: React.FC<Props> = ({ player }) => {
  const {
    shirtNumber, name, position, nationality,
  } = player;

  return (
    <tr data-testid="player">
      <td data-testid="shirt-number" className="pv3 pr3 bb b--black-20">
        {shirtNumber}
      </td>
      <td data-testid="player-name" className="pv3 pr3 bb b--black-20">
        {name}
      </td>
      <td data-testid="position" className="pv3 pr3 bb b--black-20">
        {position}
      </td>
      <td data-testid="nationality" className="pv3 pr3 bb b--black-20">
        {nationality}
      </td>
    </tr>
  );
};

export default PlayerRow;

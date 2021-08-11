import React from 'react';
import { TableType } from '../../types';

type Props = {
  club: TableType;
};

const TableRow: React.FC<Props> = ({ club }) => {
  const {
    team, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points, position,
  } = club;
  return (
    <tr key={team.id} data-testid="team">
      <td data-testid="position" className="pv3 pr3 bb b--black-20">
        {position}
      </td>
      <td data-testid="crest" className="pv3 pr3 bb b--black-20">
        <img src={team.crestUrl} width="30" height="30" alt="Team Crest" />
      </td>
      <td data-testid="team-name" className="pv3 pr3 bb b--black-20">
        {team.name}
      </td>
      <td data-testid="games-played" className="pv3 pr3 bb b--black-20">
        {playedGames}
      </td>
      <td data-testid="games-won" className="pv3 pr3 bb b--black-20">
        {won}
      </td>
      <td data-testid="games-drawn" className="pv3 pr3 bb b--black-20">
        {draw}
      </td>
      <td data-testid="games-lost" className="pv3 pr3 bb b--black-20">
        {lost}
      </td>
      <td data-testid="goals-for" className="pv3 pr3 bb b--black-20">
        {goalsFor}
      </td>
      <td data-testid="goals-against" className="pv3 pr3 bb b--black-20">
        {goalsAgainst}
      </td>
      <td data-testid="goals-difference" className="pv3 pr3 bb b--black-20">
        {goalDifference}
      </td>
      <td data-testid="points" className="pv3 pr3 bb b--black-20">
        {points}
      </td>
    </tr>
  );
};

export default TableRow;

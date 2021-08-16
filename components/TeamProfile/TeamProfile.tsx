import React from 'react';
import { TeamType } from '../../types';

type Props = {
  team: TeamType;
};

const TeamProfile: React.FC<Props> = ({ team }) => {
  const {
    name, id, clubColors, founded, venue, website,
  } = team;
  return (
    <span className="fl w-100 w-third-l tc pa3">
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
    </span>
  );
};

export default TeamProfile;

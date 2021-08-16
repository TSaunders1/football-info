import React from 'react';
import Link from 'next/link';
import { bigTeams } from '../../constants/BigTeams.constants';

export const BigTeamLinks: React.FC = () => (
  <div className="cf pa2">
    {bigTeams.map(({
      link, id, name, imgAlt,
    }) => (
      <div className="fl w-50 w-25-m w-20-l pa2" key={id} data-testid={link}>
        <Link href={`/teams/${link}`}>
          <img
            src={`https://crests.football-data.org/${id}.svg`}
            alt={imgAlt}
            className="center db black-10 link dim tc pointer"
            height="130"
          />
        </Link>
        <dl className="tc mt2 f6 lh-copy">
          <dd className="ml0 black truncate w-100">{name}</dd>
        </dl>
      </div>
    ))}
  </div>
);

export default BigTeamLinks;

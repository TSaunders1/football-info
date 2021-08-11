import React from 'react';
import Link from 'next/link';

type BigTeamsType = {
  name: string;
  id: number;
  imgAlt: string;
  link: string;
}

export const bigTeams: BigTeamsType[] = [
  {
    name: 'Manchester City',
    id: 65,
    imgAlt: 'ManCity crest',
    link: 'manchestercity',
  },
  {
    name: 'Liverpool',
    id: 64,
    imgAlt: 'Liverpool crest',
    link: 'liverpool',
  },
  {
    name: 'Chelsea',
    id: 61,
    imgAlt: 'Chelsea crest',
    link: 'chelsea',
  },
  {
    name: 'Manchester United',
    id: 66,
    imgAlt: 'ManUtd crest',
    link: 'manchesterunited',
  },
  {
    name: 'Tottenham Hotspur',
    id: 73,
    imgAlt: 'Spurs crest',
    link: 'tottenhamhotspur',
  },
  {
    name: 'Arsenal',
    id: 57,
    imgAlt: 'Arsenal crest',
    link: 'arsenal',
  },
  {
    name: 'Real Madrid',
    id: 86,
    imgAlt: 'RealMadrid crest',
    link: 'realmadrid',
  },
  {
    name: 'Barcelona',
    id: 81,
    imgAlt: 'Barcelona crest',
    link: 'barcelona',
  },
  {
    name: 'Club Atletico de Madrid',
    id: 78,
    imgAlt: 'Atletico crest',
    link: 'atleticomadrid',
  },
  {
    name: 'Sevilla',
    id: 559,
    imgAlt: 'Sevilla crest',
    link: 'sevilla',
  },
  {
    name: 'AC Milan',
    id: 98,
    imgAlt: 'ACMilan crest',
    link: 'acmilan',
  },
  {
    name: 'Juventus',
    id: 109,
    imgAlt: 'Juventus crest',
    link: 'juventus',
  },
  {
    name: 'Inter Milan',
    id: 108,
    imgAlt: 'Inter crest',
    link: 'intermilan',
  },
  {
    name: 'Roma',
    id: 100,
    imgAlt: 'Roma crest',
    link: 'roma',
  },
  {
    name: 'Napoli',
    id: 113,
    imgAlt: 'Napoli crest',
    link: 'napoli',
  },
  {
    name: 'Bayern Munich',
    id: 5,
    imgAlt: 'Bayern Munich crest',
    link: 'bayernmunich',
  },
  {
    name: 'Dortmund',
    id: 4,
    imgAlt: 'Dortmund crest',
    link: 'dortmund',
  },
  {
    name: 'RB Leipzig',
    id: 721,
    imgAlt: 'RB Leipzig crest',
    link: 'rbleipzig',
  },
  {
    name: 'Wolfsburg',
    id: 11,
    imgAlt: 'Wolfsburg crest',
    link: 'wolfsburg',
  },
  {
    name: 'PSG',
    id: 524,
    imgAlt: 'PSG crest',
    link: 'psg',
  }, {
    name: 'Lille',
    id: 521,
    imgAlt: 'Lille crest',
    link: 'lille',
  }, {
    name: 'Lyon',
    id: 523,
    imgAlt: 'Lyon crest',
    link: 'lyon',
  }, {
    name: 'Monaco',
    id: 548,
    imgAlt: 'Monaco crest',
    link: 'monaco',
  }, {
    name: 'Marseille',
    id: 516,
    imgAlt: 'Marseille crest',
    link: 'marseille',
  },
];

export const BigTeamLinks: React.FC = () => (
  <div>
    <div className="cf pa2">
      {bigTeams.map((team) => (
        <div className="fl w-50 w-25-m w-20-l pa2" key={team.id} data-testid={team.link}>
          <Link href={`/teams/${team.link}`}>
            <img
              src={`https://crests.football-data.org/${team.id}.svg`}
              alt={team.imgAlt}
              className="center db black-10 link dim tc pointer"
              height="130"
            />
          </Link>
          <dl className="tc mt2 f6 lh-copy">
            <dd className="ml0 black truncate w-100">{team.name}</dd>
          </dl>
        </div>
      ))}
    </div>
  </div>
);

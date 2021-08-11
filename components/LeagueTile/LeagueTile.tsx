import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type BigLeaguesType = {
  title: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
  testId: string;
};

export const leagues: BigLeaguesType[] = [
  {
    title: 'Premier League',
    link: 'premierleague',
    imageSrc: '/Flag_of_England.svg',
    imageAlt: 'England flag',
    testId: 'premier-league-link',
  },
  {
    title: 'La Liga',
    link: 'laliga',
    imageSrc: '/Flag_of_Spain.svg',
    imageAlt: 'Spain flag',
    testId: 'laliga-link',
  },
  {
    title: 'Serie A',
    link: 'seriea',
    imageSrc: '/Flag_of_Italy.svg',
    imageAlt: 'Italy flag',
    testId: 'seriea-link',
  },
  {
    title: 'Bundesliga',
    link: 'bundesliga',
    imageSrc: '/Flag_of_Germany.svg',
    imageAlt: 'Germany flag',
    testId: 'bundesliga-link',
  },
  {
    title: 'Ligue 1',
    link: 'ligue1',
    imageSrc: '/Flag_of_France.svg',
    imageAlt: 'France flag',
    testId: 'ligue1-link',
  },
];

const LeagueTile: React.FC = () => (
  <div className="tc">
    {leagues.map((league) => (
      <Link key={league.testId} href={`/leaguetables/${league.link}`}>
        <p
          className="tc bg-light-green dib br3 pa3 ma2 grow bw2 w5 shadow-5 pointer"
          title="league.title"
          data-testid={league.testId}
        >
          <h2>{league.title}</h2>
          <Image src={league.imageSrc} className="dib w2 h2 br-100" width="30" height="30" alt={league.imageAlt} />
        </p>
      </Link>
    ))}
  </div>
);

export default LeagueTile;

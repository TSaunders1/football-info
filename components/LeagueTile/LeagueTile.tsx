import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bigLeagues from '../../constants/BigLeague.constants';

const LeagueTile: React.FC = () => (
  <div className="tc">
    {bigLeagues.map((league) => (
      <Link key={league.testId} href={`/leaguetables/${league.link}`}>
        <span
          className="tc bg-light-green dib br3 pa3 ma2 grow bw2 w5 shadow-5 pointer"
          title="league.title"
          data-testid={league.testId}
        >
          <h2>{league.title}</h2>
          <Image src={league.imageSrc} className="dib w2 h2 br-100" width="30" height="30" alt={league.imageAlt} />
        </span>
      </Link>
    ))}
  </div>
);

export default LeagueTile;

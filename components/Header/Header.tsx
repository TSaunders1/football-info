import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => (
  <nav data-testid="header" className="db dt-l w-100 border-box pa3 ph5-l bg-white">
    <Link href="/">
      <span className="db dtc-l v-mid mid-gray link dim tc tl-l mb2 mb0-l pointer" title="Home">
        <Image src="/football-icon.png" className="dib w2 h2 br-100" width="30" height="30" alt="Site Name" />
        <span>
          <h1 className="di pre pl3 tc tl-l">Footie Info</h1>
        </span>
      </span>
    </Link>

    <span className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <Link href="/">
        <span className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="Home">
          Home
        </span>
      </Link>
      <Link href="/gamestoday">
        <span className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="Games on Today">
          Games on Today
        </span>
      </Link>
      <Link href="/leaguetables">
        <span className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="League Tables">
          League Tables
        </span>
      </Link>
    </span>
  </nav>
);

export default Header;

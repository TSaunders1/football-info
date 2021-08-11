import React from 'react';
import Sticky from 'react-sticky-el';
import Header from '../components/Header/Header';
import { BigTeamLinks } from '../components/BigTeamLinks/BigTeamLinks';

export default function Home(): JSX.Element {
  return (
    <div>
      <Sticky>
        <Header />
      </Sticky>
      <BigTeamLinks />
    </div>
  );
}

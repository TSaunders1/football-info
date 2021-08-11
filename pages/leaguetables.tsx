import React from 'react';
import Sticky from 'react-sticky-el';
import Header from '../components/Header/Header';
import LeagueTile from '../components/LeagueTile/LeagueTile';

const LeagueTables: React.FC = () => (
  <div>
    <Sticky>
      <Header />
    </Sticky>
    <LeagueTile />
  </div>
);

export default LeagueTables;

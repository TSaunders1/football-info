import React from 'react';
import { BigTeamLinks } from '../components/BigTeamLinks/BigTeamLinks';
import Layout from '../components/Layout/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <BigTeamLinks />
    </Layout>
  );
}

import React from 'react';
import { GetStaticProps } from 'next';
import GamesTodayList from '../components/GamesTodayList/GamesTodayList';
import { MatchesType } from '../types';
import Layout from '../components/Layout/Layout';
// import { MOCKgamesToday } from '../MOCKDATA/MOCKgamesToday';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.football-data.org/v2/matches', {
    method: 'GET',
    headers: {
      'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`,
    },
  });
  const matches = await res.json();

  if (!matches) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      matches: matches.matches,
    },
    revalidate: 10,
  };
};

type Props = {
  matches: MatchesType[];
};

const GamesToday: React.FC<Props> = ({ matches }) => (
  <Layout>
    <GamesTodayList matches={matches} />
  </Layout>
);

export default GamesToday;

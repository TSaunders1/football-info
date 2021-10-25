import React from 'react';
import { GetStaticProps } from 'next';
import GamesTodayList from '../components/GamesTodayList/GamesTodayList';
import { MatchesType } from '../types';
import Layout from '../components/Layout/Layout';

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

const GamesToday: React.FC<Props> = ({ matches }) => {
  if (!matches) return <p className="f5 center">Sorry, there has been an error loading the matches.</p>;

  return (
    <Layout>
      <GamesTodayList matches={matches} />
    </Layout>
  );
};

export default GamesToday;

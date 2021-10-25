import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Table from '../../components/Table/Table';
import BackButton from '../../components/BackButton/BackButton';
import bigLeagues from '../../constants/BigLeague.constants';
import { TableType } from '../../types';
import Layout from '../../components/Layout/Layout';

const dict = new Map<string, number>();
dict.set('premierleague', 2021);
dict.set('bundesliga', 2002);
dict.set('laliga', 2014);
dict.set('seriea', 2019);
dict.set('ligue1', 2015);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bigLeagues.map((league) => ({
    params: { id: league.link },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const leagueParam = dict.get(params?.id as string);
  const res = await fetch(`https://api.football-data.org/v2/competitions/${leagueParam}/standings?standingType=HOME`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`,
    },
  });
  const league = await res.json();

  return { props: { table: league?.standings[0]?.table }, revalidate: 3600 };
};

type Props = {
  table: TableType[];
};

const LeagueTablePage: React.FC<Props> = ({ table }) => {
  if (table.length === 0) return <p className="f5 center">Sorry, there has been an error loading the table.</p>;

  return (
    <Layout>
      <Table table={table} />
      <BackButton />
    </Layout>
  );
};
export default LeagueTablePage;

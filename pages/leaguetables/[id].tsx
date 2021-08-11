import React from 'react';
import Sticky from 'react-sticky-el';
// import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
// import { MOCKpremierLeagueTable } from '../../MOCKDATA/MOCKpremierLeagueTable';

import Table from '../../components/Table/Table';
import Header from '../../components/Header/Header';
import BackButton from '../../components/BackButton/BackButton';

import { leagues } from '../../components/LeagueTile/LeagueTile';
import { TableType } from '../../types';

const dict = new Map<string, number>();
dict.set('premierleague', 2021);
dict.set('bundesliga', 2002);
dict.set('laliga', 2014);
dict.set('seriea', 2019);
dict.set('ligue1', 2015);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = leagues.map((league) => ({
    params: { id: league.link },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const leagueParam = dict.get(params?.id as string);
  const res = await fetch(`https://api.football-data.org/v2/competitions/${leagueParam}/standings?standingType=HOME`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': 'cc812cec115444abb350c95d4659b717',
    },
  });
  const table = await res.json();

  return { props: { table: table.standings[0].table }, revalidate: 3600 };
};

type Props = {
  table: TableType[];
};

const LeagueTablePage: React.FC<Props> = ({ table }) =>
// const router = useRouter();

// const [table, setTable] = useState([]);

// const dict = new Map<string, number>();
// dict.set('premierleague', 2021);
// dict.set('bundesliga', 2002);
// dict.set('laliga', 2014);
// dict.set('seriea', 2019);
// dict.set('ligue1', 2015);

// useEffect(() => {
//   const league = router.asPath.replace('/leaguetables/', '');
//   fetch(`https://api.football-data.org/v2/competitions/${dict.get(league)}/standings?standingType=HOME`, {
//     method: 'GET',
//     headers: {
//       'X-Auth-Token': 'cc812cec115444abb350c95d4659b717',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => setTable(data.standings[0].table))
//     .catch((err) => {
//       console.log('This is the error', err);
//     });
// }, []);

  (
    <div>
      <Sticky>
        <Header />
      </Sticky>
      <Table table={table} />
      <BackButton />
    </div>
  );
export default LeagueTablePage;

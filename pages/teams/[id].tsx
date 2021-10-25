import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import BackButton from '../../components/BackButton/BackButton';
import { TeamType } from '../../types';
import { bigTeams, bigTeamsIdLookUpMap } from '../../constants/BigTeams.constants';
import Layout from '../../components/Layout/Layout';
import TeamProfile from '../../components/TeamProfile/TeamProfile';
import TeamSquad from '../../components/TeamSquad/TeamSquad';
import mockManCityTeam from '../../mockData/mockManCityTeam';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bigTeams.map((team) => ({
    params: { id: team.link },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const teamParam = bigTeamsIdLookUpMap.get(params?.id as string);
  const res = await fetch(`https://api.football-data.org/v2/teams/${teamParam}`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`,
    },
  });
  const team = await res.json();

  let squad;

  if (team) {
    squad = team;
  } else {
    squad = mockManCityTeam;
  }

  return { props: { team: squad }, revalidate: 60 };
};

type Props = {
  team: TeamType;
};

const TeamPage: React.FC<Props> = ({ team }) => {
  if (!team) return <p className="f5 center">Sorry, there has been an error loading your team.</p>;

  return (
    <Layout>
      <TeamProfile team={team} />
      <TeamSquad team={team} />
      <BackButton />
    </Layout>
  );
};

export default TeamPage;

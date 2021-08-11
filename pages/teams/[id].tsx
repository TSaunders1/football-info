// import { useRouter } from 'next/router';
import React from 'react';
import Sticky from 'react-sticky-el';
import { GetStaticProps, GetStaticPaths } from 'next';
import BackButton from '../../components/BackButton/BackButton';
import Header from '../../components/Header/Header';
import Team from '../../components/Team/Team';
import { TeamType } from '../../types';
import { bigTeams } from '../../components/BigTeamLinks/BigTeamLinks';

const dict = new Map<string, number>();
dict.set('manchestercity', 65);
dict.set('liverpool', 64);
dict.set('manchesterunited', 66);
dict.set('chelsea', 61);
dict.set('tottenhamhotspur', 73);
dict.set('arsenal', 57);
dict.set('realmadrid', 86);
dict.set('barcelona', 81);
dict.set('atleticomadrid', 78);
dict.set('sevilla', 559);
dict.set('acmilan', 98);
dict.set('juventus', 109);
dict.set('intermilan', 108);
dict.set('roma', 100);
dict.set('napoli', 113);
dict.set('bayernmunich', 5);
dict.set('dortmund', 4);
dict.set('rbleipzig', 721);
dict.set('wolfsburg', 11);
dict.set('psg', 524);
dict.set('lille', 521);
dict.set('lyon', 523);
dict.set('monaco', 548);
dict.set('marseille', 516);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bigTeams.map((team) => ({
    params: { id: team.link },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const teamParam = dict.get(params?.id as string);
  const res = await fetch(`https://api.football-data.org/v2/teams/${teamParam}`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': 'cc812cec115444abb350c95d4659b717',
    },
  });
  const team = await res.json();

  return { props: { team }, revalidate: 86400 };
};

type Props = {
  team: TeamType;
};

const TeamPage: React.FC<Props> = ({ team }) => {
  // const router = useRouter();

  // const [team, setTeam] = useState<TeamType>();

  // const dict = new Map<string, number>();
  // dict.set('manchestercity', 65);
  // dict.set('liverpool', 64);
  // dict.set('manchesterunited', 66);
  // dict.set('chelsea', 61);
  // dict.set('tottenhamhotspur', 73);
  // dict.set('arsenal', 57);
  // dict.set('realmadrid', 86);
  // dict.set('barcelona', 81);
  // dict.set('atleticomadrid', 78);
  // dict.set('sevilla', 559);
  // dict.set('acmilan', 98);
  // dict.set('juventus', 109);
  // dict.set('intermilan', 108);
  // dict.set('roma', 100);
  // dict.set('napoli', 113);
  // dict.set('bayernmunich', 5);
  // dict.set('dortmund', 4);
  // dict.set('rbleipzig', 721);
  // dict.set('wolfsburg', 11);
  // dict.set('psg', 524);
  // dict.set('lille', 521);
  // dict.set('lyon', 523);
  // dict.set('monaco', 548);
  // dict.set('marseille', 516);

  // useEffect(() => {
  //   const team = router.asPath.replace('/teams/', '');
  //   fetch(`https://api.football-data.org/v2/teams/${dict.get(team)}`, {
  //     method: 'GET',
  //     headers: {
  //       'X-Auth-Token': 'cc812cec115444abb350c95d4659b717',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setTeam(data))
  //     .catch((err) => {
  //       console.log('this is the error', err);
  //     });
  // }, []);

  if (!team) return <p className="f5 center">Sorry there has been an error loading your team. Please support someone else.</p>;

  return (
    <div>
      <Sticky>
        <Header />
      </Sticky>
      <Team team={team} />
      <BackButton />
    </div>
  );
};

export default TeamPage;

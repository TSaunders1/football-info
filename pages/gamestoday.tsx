import React from 'react';
import { GetStaticProps } from 'next';
import Sticky from 'react-sticky-el';
import GamesTodayList from '../components/GamesTodayList/GamesTodayList';
import Header from '../components/Header/Header';
// import { MOCKgamesToday, MOCKpremGamesToday } from '../MOCKDATA/MOCKgamesToday';
import { MatchesType } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.football-data.org/v2/matches', {
    method: 'GET',
    headers: {
      'X-Auth-Token': 'cc812cec115444abb350c95d4659b717',
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

const GamesToday: React.FC<Props> = ({ matches }) =>
// const [matches, setMatches] = useState([]);

// useEffect(() => {
//   fetch("https://api.football-data.org/v2/matches", {
//     method: "GET",
//     headers: {
//       "X-Auth-Token": "cc812cec115444abb350c95d4659b717",
//     },
//   })
//     .then((response) => response.json())
//     // eslint-disable-next-line no-shadow
//     .then(({ matches }) => setMatches(matches))
//     .catch((err) => {
//       console.error("This is the error", err);
//     });
// }, []);

  (
    <div>
      <Sticky>
        <Header />
      </Sticky>
      <GamesTodayList matches={matches} />
    </div>
  );
export default GamesToday;

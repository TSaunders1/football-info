type BigLeaguesType = {
  title: string;
  id: number;
  link: string;
  imageSrc: string;
  imageAlt: string;
  testId: string;
};

const bigLeagues: BigLeaguesType[] = [
  {
    title: 'Premier League',
    id: 2021,
    link: 'premierleague',
    imageSrc: '/Flag_of_England.svg',
    imageAlt: 'England flag',
    testId: 'premier-league-link',
  },
  {
    title: 'La Liga',
    id: 2014,
    link: 'laliga',
    imageSrc: '/Flag_of_Spain.svg',
    imageAlt: 'Spain flag',
    testId: 'laliga-link',
  },
  {
    title: 'Serie A',
    id: 2019,
    link: 'seriea',
    imageSrc: '/Flag_of_Italy.svg',
    imageAlt: 'Italy flag',
    testId: 'seriea-link',
  },
  {
    title: 'Bundesliga',
    id: 2002,
    link: 'bundesliga',
    imageSrc: '/Flag_of_Germany.svg',
    imageAlt: 'Germany flag',
    testId: 'bundesliga-link',
  },
  {
    title: 'Ligue 1',
    id: 2015,
    link: 'ligue1',
    imageSrc: '/Flag_of_France.svg',
    imageAlt: 'France flag',
    testId: 'ligue1-link',
  },
];

export default bigLeagues;

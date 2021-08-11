import { filterMatchesByComp, filterMatchesByOther } from '../GamesTodayList.utils';
import { MOCKgamesToday, MOCKpremGamesToday } from '../../../MOCKDATA/MOCKgamesToday';

const MOCKgamesTodayOther = [
  {
    id: 328789,
    competition: {
      id: 2040,
      name: 'UEFA Champions League',
      area: {
        name: 'Europe',
        code: 'EUR',
        ensignUrl: 'https://crests.football-data.org/EUR.svg',
      },
    },
    season: {
      id: 734,
      startDate: '2021-06-26',
      endDate: '2022-05-22',
      currentMatchday: 2,
      winner: null,
    },
    utcDate: '2021-07-27T17:00:00Z',
    status: 'SCHEDULED',
    matchday: 2,
    stage: 'QUALIFICATION_ROUND_2',
    group: null,
    lastUpdated: '2021-07-15T00:20:00Z',
    odds: {
      msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
    },
    score: {
      winner: null,
      duration: 'REGULAR',
      fullTime: {
        homeTeam: null,
        awayTeam: null,
      },
      halfTime: {
        homeTeam: null,
        awayTeam: null,
      },
      extraTime: {
        homeTeam: null,
        awayTeam: null,
      },
      penalties: {
        homeTeam: null,
        awayTeam: null,
      },
    },
    homeTeam: {
      id: 1890,
      name: 'Queens Park Rangers',
    },
    awayTeam: {
      id: 5954,
      name: 'Ajax',
    },
    referees: [],
  },
];

describe('filterMatchesByComp', () => {
  it('it filters the correct matches into the correct competition', () => {
    expect(filterMatchesByComp(MOCKpremGamesToday, 2021)).toStrictEqual(MOCKpremGamesToday);
  });
});

describe('filterMatchesByOther', () => {
  it('it filters the correct matches by other', () => {
    expect(filterMatchesByOther(MOCKgamesToday)).toStrictEqual(MOCKgamesTodayOther);
  });
});

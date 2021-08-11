import { MatchesType } from '../../types';

export const lookUpTable = {
  premierleague: 2021,
  bundesliga: 2002,
  laliga: 2014,
  seriea: 2019,
  ligue1: 2015,
};

export const filterMatchesByComp = (matches: MatchesType[], leagueId: number): MatchesType[] =>
  matches.filter((match) => match.competition.id === leagueId);

export const filterMatchesByOther = (matches: MatchesType[]): MatchesType[] =>
  matches.filter((match) => {
    const tableCodes = [2021, 2014, 2019, 2002, 2015];
    return !tableCodes.includes(match.competition.id);
  });

import bigLeagues from '../../constants/BigLeague.constants';
import { MatchesType } from '../../types';

export const filterMatches = (matches: MatchesType[], leagueId?: number): MatchesType[] =>
  matches.filter((match) => {
    if (leagueId) return match.competition.id === leagueId;

    const leagueIds: number[] = [];
    bigLeagues.forEach((league) => leagueIds.push(league.id));

    return !leagueIds.includes(match.competition.id);
  });

export default filterMatches;

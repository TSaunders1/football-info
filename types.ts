export interface MatchesType {
  id: number;
  competition: Competition;
  season: Season;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group?: null;
  lastUpdated: string;
  odds: Odds;
  score: Score;
  homeTeam: HomeTeamOrAwayTeam;
  awayTeam: HomeTeamOrAwayTeam;
  referees?: null[] | null;
}
export interface Competition {
  id: number;
  name: string;
  area: CompetitionArea;
}
export interface CompetitionArea {
  name: string;
  code: string;
  ensignUrl: string;
}
export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: null;
}
export interface Odds {
  msg: string;
}
export interface Score {
  winner?: null;
  duration: string;
  fullTime: FullTimeOrHalfTimeOrExtraTimeOrPenalties;
  halfTime: FullTimeOrHalfTimeOrExtraTimeOrPenalties;
  extraTime: FullTimeOrHalfTimeOrExtraTimeOrPenalties;
  penalties: FullTimeOrHalfTimeOrExtraTimeOrPenalties;
}
export interface FullTimeOrHalfTimeOrExtraTimeOrPenalties {
  homeTeam?: number | null;
  awayTeam?: number | null;
}
export interface HomeTeamOrAwayTeam {
  id: number;
  name: string;
}

export interface TableType {
  position: number;
  team: Team;
  playedGames: number;
  form?: null;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
export interface Team {
  id: number;
  name: string;
  crestUrl: string;
}

export interface TeamType {
  id: number;
  area: Area;
  activeCompetitions?: (ActiveCompetitionsEntity)[] | null;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  squad?: (SquadEntity)[] | null;
  lastUpdated: string;
}
export interface Area {
  id: number;
  name: string;
}
export interface ActiveCompetitionsEntity {
  id: number;
  area: Area;
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
}
export interface SquadEntity {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  shirtNumber?: number | null;
  role: string;
}

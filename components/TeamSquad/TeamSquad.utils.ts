import { SquadEntity } from '../../types';

const sortSquad = (squad?: SquadEntity[] | null): SquadEntity[] | undefined | null => {
  squad?.sort((a: SquadEntity, b: SquadEntity) => {
    if (a.shirtNumber === null || undefined) {
      return 1;
    }
    if (b.shirtNumber === null || undefined) {
      return -1;
    }
    return (a.shirtNumber ?? 0) < (b.shirtNumber ?? 0) ? -1 : 1;
  });
  return squad;
};

export default sortSquad;

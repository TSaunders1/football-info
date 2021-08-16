import filterMatches from '../GamesTodayList.utils';
import { mockPremGamesToday } from '../../../mockData/mockGamesToday';

describe('filterMatches', () => {
  it('it filters the correct matches into the correct competition', () => {
    expect(filterMatches(mockPremGamesToday, 2021)).toStrictEqual(mockPremGamesToday);
  });
});

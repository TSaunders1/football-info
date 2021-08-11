import getKickOffTime from '../Match.utils';

describe('when America/Toronto', () => {
  const timezoneMock = (zone: string) => {
    const { DateTimeFormat } = Intl;

    jest
      .spyOn(global.Intl, 'DateTimeFormat')
      .mockImplementation(
        (locale, options) => new DateTimeFormat(locale, { ...options, timeZone: zone }),
      );
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('returns local time', () => {
    timezoneMock('America/Toronto');
    expect(getKickOffTime('2021-07-27T17:00:00Z')).toEqual('13:00');
  });

  it('returns local time', () => {
    timezoneMock('Europe/Madrid');
    expect(getKickOffTime('2021-07-27T17:00:00Z')).toEqual('19:00');
  });
});

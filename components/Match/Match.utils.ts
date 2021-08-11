const getKickOffTime = (date: string): string => Intl.DateTimeFormat('en', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
}).format(new Date(date));

export default getKickOffTime;

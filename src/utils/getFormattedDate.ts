export const getTodayDate = (): Date => {
  const todayDate = new Date();
  const offset = todayDate.getTimezoneOffset();
  const formattedDate = new Date(todayDate.getTime() - offset * 60 * 1000);

  return formattedDate;
};

export const getDateFrom = (dateStr: string): Date => {
  const date = new Date(dateStr);
  const offset = date.getTimezoneOffset();
  const formattedDate = new Date(date.getTime() - offset * 60 * 1000);

  return formattedDate;
};

export const getStrDateFromISO = (iso: string): string => {
  const fullDate = new Date(iso);
  const date = `${fullDate.getDate()}`.padStart(2, '0');
  const month = `${fullDate.getMonth() + 1}`.padStart(2, '0');
  const year = fullDate.getFullYear();

  return `${date}-${month}-${year}`;
};

export const getISODateFromStr = (dateStr: string): string => {
  const date = new Date(dateStr);
  const formattedDate = date.toISOString();

  return formattedDate;
};

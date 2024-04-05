const getTodayDate = () => {
  const todayDate = new Date();
  const offset = todayDate.getTimezoneOffset();
  const formattedDate = new Date(todayDate.getTime() - offset * 60 * 1000);

  return formattedDate;
};

export default getTodayDate;

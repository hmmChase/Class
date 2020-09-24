export const formatDate = date => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('/');
};

export const timestamp = date => {
  const d = new Date(date);

  return d
    .toLocaleTimeString([], { timeStyle: 'short' })
    .replace(' ', '')
    .replace('AM', 'am')
    .replace('PM', 'pm');
};

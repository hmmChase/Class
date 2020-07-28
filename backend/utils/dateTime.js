/**
 * Convert time to SQL format
 * You first need to create a formatting function to pad numbers to two digits…
 **/
const twoDigits = d => {
  if (0 <= d && d < 10) return '0' + d.toString();

  if (-10 < d && d < 0) return '-0' + (-1 * d).toString();

  return d.toString();
};

/**
 * …and then create the method to output the date string as desired.
 * Some people hate using prototypes this way, but if you are going
 * to apply this to more than one Date object, having it as a prototype
 * makes sense.
 **/
const toSQLFormat = () =>
  this.getUTCFullYear() +
  '-' +
  twoDigits(1 + this.getUTCMonth()) +
  '-' +
  twoDigits(this.getUTCDate()) +
  ' ' +
  twoDigits(this.getUTCHours()) +
  ':' +
  twoDigits(this.getUTCMinutes()) +
  ':' +
  twoDigits(this.getUTCSeconds());

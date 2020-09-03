export default (name, url) => {
  // Get Url from browser
  if (!url) url = window.location.href;

  const parsedName = name.replace(/[[\]]/g, '\\$&');

  const regex = new RegExp('[?&]' + parsedName + '(=([^&#]*)|&|#|$)');

  const results = regex.exec(url);

  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

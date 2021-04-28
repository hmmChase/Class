const getUrlParameter = (name, url) => {
  // Get Url from browser
  if (!url) url = window.location.href;

  const parsedName = name.replace(/[[\]]/g, '\\$&');

  const regex = new RegExp('[?&]' + parsedName + '(=([^&#]*)|&|#|$)');

  const results = regex.exec(url);

  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

// const getUrlParameter = (name, url) => {
//   // Get Url from browser
//   if (!url) url = window.location.href;

//   const parsedName = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

//   let regex = new RegExp('[\\?&]' + parsedName + '=([^&#]*)');

//   let results = regex.exec(window.location.search);

//   return results === null
//     ? ''
//     : decodeURIComponent(results[1].replace(/\+/g, ' '));
// };

// const qs = key => {
//   key = key.replace(/[*+?^$.[\]{}()|\\/]/g, '\\$&'); // escape RegEx meta chars

//   const match = window.location.search.match(
//     new RegExp(`[?&]${key}=([^&]+)(&|$)`)
//   );

//   return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
// };

export default getUrlParameter;

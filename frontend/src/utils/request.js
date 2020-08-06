export default async (route, options) => {
  const RESTversion = 'v1';

  const urlBase =
    process.env.NODE_ENV === 'production'
      ? `https://challenge-board.vercel.app/api/${RESTversion}`
      : `http://localhost:4000/api/${RESTversion}`;

  const url = `${urlBase}${route}`;

  try {
    const response = await fetch(url, options);

    // if (response.status === 200) {
    return await response.json();
    // }
  } catch (err) {
    console.error(err);
  }
};

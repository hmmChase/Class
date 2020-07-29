export default async (route, options) => {
  const urlBase =
    process.env.NODE_ENV === 'production'
      ? 'https://challenge-board.vercel.app/api'
      : 'http://localhost:4000';

  const url = `${urlBase}${route}`;

  try {
    const response = await fetch(url, options);

    if (response.status === 200) {
      return response.json();
    }
  } catch (err) {
    console.error(err);
  }
};

export default async (route, options) => {
  const urlBase = 'http://localhost:4000';

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

const urlBase = 'http://localhost:4000';

export default async (route, options) => {
  const url = `${urlBase}/${route}`;

  try {
    const response = await fetch(url, options);

    if (response.status === 200) {
      return response.json();
    }
  } catch (err) {
    console.error(err);
  }
};

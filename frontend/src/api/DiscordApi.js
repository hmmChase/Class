import request from '../utils/request';

export const getDiscordUrl = async () => {
  const options = {
    method: 'GET',
    credentials: 'include'
    // mode: 'same-origin'
    // headers: { cookie: `state=asdfsdaf` }
  };

  const data = await request('/discord', options);

  return data.discordUrl;
};

export const discordSignup = async (code, state) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ state, code }),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  };

  return await request('/discord/signup', options);
};

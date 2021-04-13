import instance from './baseApi';

/* GET */

export const getChallenges = async () => await instance.get('/challenge/all');

export const getChallenge = async variables => {
  return await instance.get(`/challenge/path/${variables.challengePath}`);
};

/* POST */

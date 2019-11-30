import axios from 'axios';

const request = () => {
  const baseRequest = axios.create();
  baseRequest.defaults.baseURL = 'http://hahow-recruit.herokuapp.com';

  return baseRequest;
}

export const apiGetHeroList = () => request().get('/heroes');
export const apiGetHeroProfile = (heroId) => request().get(`/heroes/${heroId}/profile`);
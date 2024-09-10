import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserRepos = async (username: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error('Unable to fetch repositories');
  }
};

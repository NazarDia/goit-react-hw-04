import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_KEY = '_VU7WubaksO29U5aRkjWD86DIC3YXv3fIscVcEK5pPg';

export const searchImages = async (query, page) => {
  const response = await axios.get('/search/photos', {
    params: {
      query: query,
      per_page: 12,
      page,
      client_id: API_KEY,
    },
  });

  return response.data;
};

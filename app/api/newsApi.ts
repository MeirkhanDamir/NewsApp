import axios from 'axios';

const API_KEY = 'bfbc5a596fd2458caefd260e65d8d8f7';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us';

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error('Ошибка при получении новостей:', error);
    return [];
  }
};
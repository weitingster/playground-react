import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fa0215d5b42ccde9beb8737b7a88f6b287697768ac4227a1d248775815dce9bd'
  }
});

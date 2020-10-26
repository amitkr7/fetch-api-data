import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ZqR4iG5KGL2JYvsylUPI2n5Ai1oTm4ulBj7ql38UKBk',
  },
});

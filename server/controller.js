import { response } from 'express';

const controller = {
  cats: async function getCats() {
    const url = 'https://api.thecatapi.com/v1/images/0XYvRd7oD';
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  },
};

import { response } from 'express';

const controller = {
  swapi: async function getSwapi(req, res, next) {
    const url = 'http://swapi.dev/api/planets/1/';
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Response Status: ', res.status);

      const data = res.json();
      console.log(data);
      res.locals.swapi = data;
      next();
    } catch (error) {
      console.error(error.message);
    }
  },
};

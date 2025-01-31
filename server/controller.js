import { response } from 'express';
import pool from './db.js';

const controller = {
  // swapi: async function getSwapi(req, res, next) {
  //   const url = 'http://swapi.dev/api/planets/1/';
  //   try {
  //     const res = await pool(url);
  //     if (!res.ok) throw new Error('Response Status: ', res.status);

  //     const data = res.json();
  //     console.log(data);
  //     res.locals.swapi = data;
  //     next();
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // },
  fetchPosts: async function fetchPosts(req, res, next) {
    console.log('ENTERING CONTROLLER')
    try {
      const res = await fetch('https://localhost:8080/request/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
      const data = await res.json();
      console.log('fetchPosts: ', data);
      res.locals.fetchPosts = data;
      return next();
    } catch (error) {
      console.error('Error fetch posts: ', error);
    }
  },
};

export default controller;

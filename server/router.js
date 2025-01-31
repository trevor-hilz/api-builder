import controller from './controller.js';
import express from 'express';
const router = express.Router();

router.get('/swapi/', controller.swapi, (req, res, next) => {
  return res.status(200).json(res.locals.swapi);
});

export default router;

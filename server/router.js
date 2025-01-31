import express from 'express';
import controller from './controller.js';

const router = express.Router();

// ✅ Log when routes are being used
router.get(
  '/posts',
  (req, res, next) => {
    console.log('ENTERING ROUTER');
    console.log('🔹 GET /request/posts was called');
    next();
  },
  controller.fetchPosts
);

export default router;

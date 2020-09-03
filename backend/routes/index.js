import express from 'express';

const router = express.Router();

router.get('/', function (req, res, next) {
  return res.json({ route: 'index' });
});

export default router;

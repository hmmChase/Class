import express from 'express';

const router = express.Router();

router.get('/', function (req, res, next) {
  return res.json({ title: 'Express' });
});

export default router;

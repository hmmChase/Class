import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => res.json({ route: 'index' }));

export default router;
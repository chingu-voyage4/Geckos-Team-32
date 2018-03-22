const express = require('express');
const router = express.Router();

const userRouter = require('./user/userRoutes');
const authRouter = require('./user/authRoutes');
const youtubeRouter = require('./youtubeRoutes');

// ROUTING PATHS
router.use('/', userRouter);
router.use('/auth', authRouter);
router.use('/yt', youtubeRouter);

module.exports = router;
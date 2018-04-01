const express = require('express');
const router = express.Router();

const userRouter = require('./user/userRoutes');
const authRouter = require('./user/authRoutes');
const youtubeRouter = require('./youtubeRoutes');
const videoRouter = require('./videos');

// ROUTING PATHS
router.use('/', userRouter);
router.use('/auth', authRouter);
router.use('/yt', youtubeRouter);
router.use('/user/:id/videos', videoRouter);

module.exports = router;
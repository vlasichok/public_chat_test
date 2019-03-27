const router = require('express').Router();
const messageRoutes = require('./routes/messageRoutes');

//api router will mount other routers used in the API
router.use('/messages', messageRoutes);

router.get('/', (req, res) => {
    res.status(200).send('Welcome to the API');
});

module.exports = router;

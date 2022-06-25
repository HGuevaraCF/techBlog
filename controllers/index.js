const router = require('express').Router();
const apiRoutes = require('./api');
const appRoutes = require('./appRoutes');

router.use('/', appRoutes);
router.use('/api', apiRoutes);

router.use('*', async (req, res) => {
    res.status(500).json({
        success: false,
        message: 'The page does not exist!'
    });
});

module.exports = router;
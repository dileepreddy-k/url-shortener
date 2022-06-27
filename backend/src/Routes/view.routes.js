const express = require('express');
const router = express.Router();

const viewController = require('../Controllers/view.controller');

// GET /:urlCode
router.get('/:urlCode', viewController.redirectToLongUrl);

module.exports = router;
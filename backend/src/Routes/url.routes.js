const express = require('express');
const router = express.Router();

const urlController = require('../Controllers/url.controller');

// POST /api/url/shorten
router.post('/shorten', urlController.shortenUrl);

module.exports = router;
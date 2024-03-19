const express = require('express');
const router = express.Router();
const webhookController = require('../controller/webhookController');

// Webhook endpoint for most ordered food
router.post('/webhook/most-ordered-food', webhookController.mostOrderedFoodWebhook);

module.exports = router;
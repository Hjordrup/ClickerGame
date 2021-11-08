const express = require('express');
const router = express.Router();

const { addClick, getClicks, createPlayer } = require('../controllers/clicks');

router.route('/click/:id').get(addClick);
router.route('/antalClick/:id').get(getClicks);
router.route('/addPlayer').post(createPlayer);

module.exports = router;

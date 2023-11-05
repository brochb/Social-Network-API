const express = require('express');
const router = express.Router();

const ReactionController = require('../../controllers/reactionController');

router.post('/', ReactionController.createReaction);
router.delete('/:reactionId', ReactionController.removeReaction);

module.exports = router;
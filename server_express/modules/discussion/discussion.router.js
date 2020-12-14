const express = require('express');
const DiscussionController = require('./discussion.controller');

const router = express.Router();

//6 + 1
router.get('/', DiscussionController.getAllAction);
router.get('/:title', DiscussionController.getByTitleAction);
router.get('/id:([0-9]+)/messages', DiscussionController.getMessagesByDiscussionIdAction);


router.put('/:id([0-9]+)', DiscussionController.updateDiscussionAction);

router.post('/create', DiscussionController.createAction);
router.post('/:id([0-9]+)/create/message', DiscussionController.createMessageAction);

//router.put('/message/:id([0-9]+)', DiscussionController.updateMessageAction);

module.exports = router;
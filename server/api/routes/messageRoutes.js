const express = require('express');
const messageController = require('../controllers/messageController');

const messageRoutes = () => {

    const messageRouter = express.Router();

    messageRouter.route('/')
        .post(messageController.createMessage);

    messageRouter.route('/:page')
        .get(messageController.getMessages);

    //middleware that get the event for DB and pass it in req
    messageRouter.route('/:id')
        .get(messageController.getOneMessage)
        .put(messageController.updateMessage)
        .delete(messageController.deleteMessage);

    return messageRouter;
};

module.exports = messageRoutes();

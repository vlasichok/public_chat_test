const Message = require('../models/messageModel');
const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');
const {PAGE_LIMIT} = require('../constants/messageConstants');

const messageController = {
    getOneMessage: (req, res) => {
        Message.getOneMessage(messageId)
            .then((message) => {
                if (!message) {
                    return res.status(404).json(ErrorBuilder(ERROR_LIST.MESSAGE_NOT_FOUND));
                } else {
                    return res.status(200).json(message);
                }
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    },
    getMessages: (req, res) => {
        const page = parseInt(req.params.page, 10) + 1;
        if (isNaN(page) || page < 0) {
            return res.status(400).json(ErrorBuilder(ERROR_LIST.PAGE_NUMBER_IS_INCORECT));
        }
        const pageLimit = PAGE_LIMIT;

        Message.getMessages(page, pageLimit)
            .then((messages) => {
                return res.status(200).json(messages);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    },
    updateMessage: (req, res) => {
        const messageId = req.params.id;
        if (messageId === void 0) {
            return res.status(400).json(ErrorBuilder(ERROR_LIST.ID_IS_NOT_DEFINED));
        }
        const messageBody = req.body;
        if (Object.keys(messageBody).length < 1) {
            return res.status(400).json(ErrorBuilder(ERROR_LIST.REQUEST_BODY_IS_EMPTY));
        }

        Message.updateMessages(messageId, req.body)
            .then((updatedMessage) => {
                return res.status(200).json(updatedMessage);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    },
    createMessage: (req, res) => {
        const messageBody = req.body;
        if (Object.keys(messageBody).length < 1) {
            return res.status(400).json(ErrorBuilder(ERROR_LIST.REQUEST_BODY_IS_EMPTY));
        }

        Message.create(req.body)
            .then((message) => {
                return res.status(201).json(message);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    },
    deleteMessage: (req, res) => {
        const messageId = req.params.id;
        if (messageId === void 0) {
            return res.status(400).json(ErrorBuilder(ERROR_LIST.ID_IS_NOT_DEFINED));
        }

        Message.findByIdAndRemove(messageId)
            .then((removedMessage) => {
                return res.status(200).json(removedMessage);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    }
};

module.exports = messageController;

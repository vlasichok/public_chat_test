const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        match: /^.{1,100}$/
    },
    authorEmail: {
        type: String,
        required: true,
        trim: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', MessageSchema);
const avoidPropery = '-__v';

Message.getOneMessage = (id) => {
    return Message.findById(id, avoidPropery)
        .exec();
};

Message.getMessages = (page, pageLimit) => {
    return Message.find({}, avoidPropery)
        .skip((pageLimit * page) - pageLimit)
        .limit(pageLimit)
        .exec();
};

Message.updateMessages = (id, messageBody) => {
    return Message.findByIdAndUpdate(id, messageBody)
        .exec()
};

module.exports = Message;

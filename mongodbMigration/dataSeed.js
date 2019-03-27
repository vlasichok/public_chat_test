const mongoose = require('mongoose');

// Data array containing seed data - documents organized by Model
const dataSeed = () => {
    return [
        {
            'model': 'Message',
            'documents': [
                {
                    text: 'I wanna kill you all',
                    authorEmail: 'user1@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Calm down, everything will be fine',
                    authorEmail: 'user2@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user3@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user4@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user5@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user6@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user7@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user8@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user9@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user4@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user10@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user11@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user12@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user13@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user14@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user15@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user16@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user17@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user18@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user19@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user20@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user21@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user22@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user23@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user24@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user25@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user26@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user27@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user28@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user29@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user30@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user31@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user32@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user33@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user34@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },                {
                    text: 'Do not think so, we need to do something with it',
                    authorEmail: 'user35@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'So whaaaaat?',
                    authorEmail: 'user36@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                },
                {
                    text: 'Nothing!',
                    authorEmail: 'user537@mail.com',
                    createdAt: new Date,
                    updatedAt: new Date,
                }
            ]
        }
    ];
};

module.exports = dataSeed;

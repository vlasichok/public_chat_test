const seeder = require('mongoose-seed');
const dataSeed = require('./dataSeed');
const config = require('../server/config/config');
const messageModel = './server/api/models/messageModel.js';

// Connect to MongoDB via Mongoose
seeder.connect(config.dataBaseUrl, function() {

    // Load Mongoose models
    seeder.loadModels([
        messageModel
    ]);

    // Clear specified collections
    seeder.clearModels(['Message'], function() {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(dataSeed(), function() {
            seeder.disconnect();
        });

    });
});

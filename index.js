//intro point for our server
const config = require('./server/config/config');
const app = require('./server/server');
const mongoose = require('mongoose');

mongoose.connect(config.dataBaseUrl, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    app.listen(config.port, () => {
        console.log('Running on http://localhost:' + config.port);
    });
});

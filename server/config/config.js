//default config object for out api
const config = {
    /* here goes NODE_ENV values */
    dev: 'development',
    prod: 'production',
    port: process.env.PORT || 3000,
    dataBaseUrl: process.env.DATABASEURL || 'mongodb://localhost/chatDB'
};

// check if the NODE_ENV was set, default is dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

let envConfig;
// check if the require returns an error, then just use an empty object for envConfig
//so it won't start the server
try {
    envConfig = require('./' + config.env);
    envConfig = envConfig || {};
} catch (e) {
    envConfig = {};
}

module.exports = Object.assign(config, envConfig);

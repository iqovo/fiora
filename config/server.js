const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'database', type: String },
    { name: 'jwtSecret', type: String },
];
const options = commandLineArgs(optionDefinitions);

module.exports = {
    // service port
    port: 9200,

    // mongodb config
    database: options.database || 'mongodb://localhost:27017/fiora',

    // jwt encryption secret
    jwtSecret: options.jwtSecret || 'jwtSecret',

    // token expires time
    tokenExpiresTime: 1000 * 60 * 60 * 24 * 30,

    // default group avatar url
    defaultGroupAvatar: '/static/default_group_avatar.png',
    // default user avatar url
    defaultUserAvatar: '/static/default_user_avatar.png',
};
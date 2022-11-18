const config = new Map();

config.set('port', process.env.PORT || 3000)
config.set('env', 'development') // [production, development]

module.exports = config;
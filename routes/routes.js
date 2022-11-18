const indexController = require('../app/controller/indexController')

module.exports = (app) => 
{
	app.get('/', indexController.index)
	app.get('/register', indexController.index)
	app.get('/login', indexController.index)
}
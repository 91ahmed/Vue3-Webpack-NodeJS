const config = require('./config')
const express = require('express')
const app = express()
const session = require('express-session')
const FileStore = require('session-file-store')(session)

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }))

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

// Set views path
app.set('views', './app/view')
// Set template engine
app.set('view engine', 'pug')

app.use(express.static('public'))

// Sessions
app.use(session({
	store: new FileStore({
		path: './storage/sessions',
		logFn: function(){}
	}),
	secret: 'A4fr4gGJvvvBX',
	resave: true,
	saveUninitialized: true,
	cookie: { 
		secure: false // Note that secure: true is a recommended option. it requires an https-enabled website. 
	}
}))

// Import routes file
const routes = require('./routes/routes')(app)

app.listen(config.get('port'), () => {
	console.log(`Server is running on port ${config.get('port')}`)
})
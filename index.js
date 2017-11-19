const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const addUserToEmailList = require('./api/mailchimp');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'https://cryptodasher.com');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/home.html');
});

app.post('/addtoemail', (req, res, next) => {
	const email = req.query.email;
	if (email) {
		addUserToEmailList(email);
	}
});

app.listen(port, () => {
	console.log('Listening');
});

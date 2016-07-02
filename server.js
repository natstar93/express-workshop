import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-post', (req, res) => {
	res.redirect('/');
});

app.listen(3000, () => {
	console.log('Listening on 3000');
});

module.exports = app;

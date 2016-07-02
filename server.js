import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-post', (req, res) => {
	function readData(callback) {
		fs.readFile(__dirname + '/data/posts.json', (err, file) => {
			if(err) {
				console.log(err.message);
			}
			let parsedFile = JSON.parse(file);
			const datestamp = new Date().valueOf().toString();
			parsedFile[datestamp] = req.body.blogpost;
			callback(parsedFile);
		});
	}

	function writeData(file) {
		const stringifiedFile = JSON.stringify(file);
		fs.writeFile(__dirname + '/data/posts.json', stringifiedFile, () => {
			console.log('Post added');
		});
	}

	readData(writeData);

	res.redirect('/');
});

app.listen(3000, () => {
	console.log('Listening on 3000');
});

module.exports = app;

import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send('Noooodeeeeeee!!');
});

app.get('/node', (req, res) => {
	res.send('node');
})

app.get('/girls', (req, res) => {
	res.send('girls');
})

app.listen(3000, () => {
	console.log('Listening on 3000');
});

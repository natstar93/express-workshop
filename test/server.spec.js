import request from 'supertest';

describe('loading express', () => {
  let server;

	beforeEach(() => {
		server = require('../server');
	});

	it('responds to /', (done) => {
		request(server)
		  .get('/')
			.expect(200, done);
	});

	it('redirects to / after posting', (done) => {
		request(server)
			.post('/create-post')
			.expect(302, done);
	});

	it('404 everything else', (done) => {
		request(server)
		  .get('/nothinghere')
			.expect(404, done);
	});
});

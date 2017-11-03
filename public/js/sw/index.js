self.addEventListener('fetch', function(event) {
	// TODO: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
	var headers = new Headers();
	headers.append('Content-Type', 'text/html');
	headers.append('foo', 'bar');
	event.respondWith(
		new Response('<h1 class="a-winner-is-me">Hello World!</h1>', {
			headers
		})
	);
});
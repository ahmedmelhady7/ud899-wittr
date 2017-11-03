self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  // if(event.request)
  let regex = /\.jpg$/;
  if(event.request.url.match(regex)) {
  	console.log('success');
  	event.respondWith(
  		fetch('/imgs/dr-evil.gif')
  	);
  } else {
  	console.log(event.request.url, event.request.url.match(regex));
  }
});
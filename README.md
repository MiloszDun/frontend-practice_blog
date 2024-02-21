### Current Status
All functionalities work, but without frontend styling.

### What is it
This is a simple blog app, to practice getting & displaying data from a mock API.

It allows the user to...
- (1) See short versions of posts (with images, excerpts and dates)
- (2) Filter posts by category
- (3) Sort posts by date.

The mock API is inside `server.js`. It's designed to occasionally misfire – frontend should be able to handle that.

### Mock API instructions

To run the mock API, use `$ node server.js`.

API will listen on `port 6010`. To connect, use either `/articles/music` or `/articles/books`.

There is a 10% chance, that the server will return a 500 error.

### Run

First start the server using `$ node server.js`. Then, run the app with `npm start`.
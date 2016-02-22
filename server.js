var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
    response.send('about us');
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express Server Started, listening on port ' + PORT + '!');
});

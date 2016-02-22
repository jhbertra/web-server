var express = require('express');
var app = express();

var middleware = {
    requireAuthentication: function (request, response, next) {
        console.log('private route hit!');
        next();
    },
    logger: function (request, response, next) {
        console.log('Request: ' + request.method + ' ' + request.originalUrl);
        next();
    }
}

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
    response.send('about us');
})

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log('Express Server Started!');
});

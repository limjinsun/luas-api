var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./ssl/domain.key', 'utf8');
var certificate = fs.readFileSync('./ssl/domain.crt', 'utf8');
var cors = require('cors');
var credentials = {key: privateKey, cert: certificate};
var app = require('./app');
app.use(cors());

var port = 8080;
app.set('port', port);



var server = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


server.listen(port, () => {
    console.log("app_runnning");
});

httpsServer.listen(8443, () => {
    console.log("https-8443");
})

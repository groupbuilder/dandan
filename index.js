var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./caepa')).listen(8080);

var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
s = "";
for (i = 2; i < 100; i++) {
    for (j = 2; j * j <= i; j++) {
        if (i % j == 0) {
            break;
        }
    }
    if (j * j > i) {
        s += " " + i;
    }
}
response.send(s);
  //response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

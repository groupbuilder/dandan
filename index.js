var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  //response.send('<iframe src="http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=1-tRENjHuydd9hCY8M3lZ0kOBv20LS9KlsUor7pe2DMU&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650" width="100%" height="650" frameborder="0"></iframe>')
  //response.send('Hello World!')
  //response.send('./capea/index.html')
  fs = require('fs')
  fs.readFile('./caepa/index.html', function (err, html) {
      if (err) {
      throw err;
      }       
      response.write(html);
  }
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/../public'));

// views is directory for all template files
app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});
app.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
      result += i + ' ';
  response.send(result);
});

/*app.use("/hasan",
  proxy({
      target: "route.address",
      pathRewrite: (path, req) => {
          return path.split('/').slice(2).join('/'); // Could use replace, but take care of the leading '/'
      }
  })
);
*/
app.get('/words',(req,res) => {
    words = req.query;
    if(words.hasOwnProperty('word') || words.hasOwnProperty('translate')) {
        fs.appendFile('../words.csv', words.translate + ';' + words.word + '\r\n', function(err) {
            if(err) {
                return console.log(err);
            }
        console.log('The file was saved!');
        });
    }
    res.render("pages/words");
});

app.listen(app.get('port'), function() {
  console.log('Hasan\'s Node app is running on port', app.get('port'));
});

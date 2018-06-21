var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 9625);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  var qParams = [];
  for (var item in req.query) {
    qParams.push({'name':item, 'value':req.query[item]})
  }
  var context = {};
  context.queryData = qParams;
  res.render('get', context);
});

app.post('/', function(req, res){
  var bParams = [];
  var qParams = [];
  for (var item in req.body){
    bParams.push({'name':item, 'value':req.body[item]})
  }
  for (var item in req.query) {
    qParams.push({'name':item, 'value':req.query[item]})
  }
  console.log(bParams);
  console.log(qParams);
  var context = {};
  context.bodyData = bParams;
  context.queryData = qParams;
  res.render('post', context);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on port 9625');
});
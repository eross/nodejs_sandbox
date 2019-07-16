var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express()

app.use(morgan('combined'));
app.get('/', function(req, res){
    console.log("requested '/'")
    res.end('Hello World')

});

app.listen(3000, function(){
    console.log('Listening on port ' + chalk.green('3000'));
    console.log(`listening on port ${chalk.green('3000')}`);
    debug(`listening on port ${chalk.green('3000')}`);
    
});
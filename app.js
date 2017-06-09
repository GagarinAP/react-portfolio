var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var json = require('./json/statistic.json');
var conf = require('./json/conf');
var nodemailer = require('nodemailer');

var app = express();
var port = process.env.PORT || '3000';
app.set('port', port);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var mailTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: conf.gmail.user,
        pass: conf.gmail.password,
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.get('/statistic-chart',function(req,res){
	res.json(json);
});

app.post('/send-message',function(req,res){
	var name = req.body.name;
    var email = req.body.email;
    var text = req.body.text;
    mailTransport.sendMail({
        from: email,
        to: '',
        subject: 'Message from Portfolio site!!!',
        html: '<p>Name: ' + name + '</p><p>Email: ' + email + '</p><p>Text: ' + text + '</p>',
        text: text,
    },function(err){
        if(err) console.error('Error send mail',err);
    });
    res.send({message: 'OK'});
});

app.listen(port, function(){
	console.log('Server run in http://localhost:',port);
});

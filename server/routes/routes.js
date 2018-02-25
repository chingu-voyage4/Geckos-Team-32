var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('./models/user');

router.get('/', function(req, res){
  res.render('index')
});

router.route('/insert')
.post(function(req,res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
user.save(function(err) {
    if (err)
        res.send(err);
        res.send('User successfully added!');
    });
})

router.route('/update')
.post(function(req, res) {
    const doc = {
        username: req.body.username,
        passeword: req.body.password,
    };
    console.log(doc);
    user.update({_id: req.body._id}, doc, function(err, result) {
        if (err)
            res.send(err);
        res.send('User successfully updated!');
    });
});

router.get('/delete', function(req, res){
    var id = req.query.id;
    user.find({_id: id}).remove().exec(function(err, user) {
        if(err)
        res.send(err)
        res.send('User successfully deleted!');
    })
});

module.exports = router;

// router.get('/getAll',function(req, res) {
//     var usernameRec = req.query.username;
//     var passwordRec = req.query.password;
//     if(usernameRec && usernameRec != 'All'){
//         user.find({$and: [ {username: usernameRec}, {password: passwordRec}]}, function(err, users) {
//             if (err)
//                 res.send(err);
//                 res.json(users);
//         });
//     } else {
//         user.find({user: userRec}, function(err, expenses) {
//             if (err)
//             res.send(err);
//             res.json(users);
//         });
//     }
// });
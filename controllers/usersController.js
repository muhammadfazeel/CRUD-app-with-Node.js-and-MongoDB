var express = require('express');
var mongoose = require('mongoose');
var user_model=require('../model/users');
mongoose.connect('mongodb://localhost/new');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//To Add Record...
exports.addRecord=function(req,res)
{
var newuser = new user_model
({
    name:req.body.Name,
    email:req.body.Email,
    phoneNo:req.body.Phone
    
});

    newuser.save(function(err)
    {
        if (err) {
            return next(err);
        }
        res.send('Data Added')
    }
);
};
//For Update Record...
exports.UpdateRecord=function(req,res)
{
    
    user_model.findByIdAndUpdate(req.params.id, {$set:{'name': req.body.Name,'email':req.body.Email,'phoneNo':req.body.Phone}},
         function (err, user_model) {
        if (err) {
        return next(err);
        }
        res.send('Data udpated.');
    });

};
//To Delete Record...
exports.DeleteRecord = function (req, res) {
    user_model.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};
//To Read Record...
exports.ReadRecord = function (req, res) {
    user_model.findById(req.params.id, function (err) {
        if (err) return next(err,user_model);
        res.send(user_model);
    });
};
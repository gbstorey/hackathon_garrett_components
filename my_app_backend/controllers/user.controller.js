const db = require("../models");
const User = db.users;

exports.create = (req,res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send({message: "content can not be empty!"});
        return;
    }
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        rememberme: req.body.rememberme ? req.body.rememberme : false
    });
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occured while creating the User."
            });
        });
};

exports.findAll = (req,res) => {

};

exports.findOne =(req, res) => {
    
};

exports.update = (req,res) => {

};

exports.delete = (req,res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};
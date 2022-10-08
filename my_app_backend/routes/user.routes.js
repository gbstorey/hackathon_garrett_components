module.exports = app => {
    const users = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    router.post("/", users.create)
    app.use('/api/users', router)
};
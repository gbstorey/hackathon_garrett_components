const dbConfig = require("../config/db.config.js")

const mongoose = require("mongoose");
const { modalUnstyledClasses } = require("@mui/material");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.userModel = require("./user.model.js")(mongoose);

module.exports = db;
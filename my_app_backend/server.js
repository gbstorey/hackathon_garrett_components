const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const db = require("./models");
const app = express();
var corsOptions = {
    origin:"http://localhost:5000"
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Connected to the database!");
    })
    .catch(err=> {
        console.log("Cannot connect to the database!", err);
        process.exit()
    });

app.get("/", (req,res) => {
    res.json({ message: "Welcome to the ECurrency application."});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
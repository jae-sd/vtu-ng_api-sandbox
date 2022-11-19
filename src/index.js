const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;
const createConnection = require("./config/db")

//routes
const user = require("./routes/user.route");
const services = require('./routes/services.route')


//express middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//Routes
app.get("/", (req, res) => {
    res.status(200).json("Server is active");
});
app.use("/user", user);
app.use("/api/v1/services", services)


//Database Connection
createConnection((error) => {
    if(!error) {
        app.listen(PORT, () => {
            console.log('Sandbox Server Is Running')
        })
    }
})









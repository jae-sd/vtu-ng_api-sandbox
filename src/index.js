const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//routes
const user = require("./routes/user.route");
const services = require('./routes/services.route');
const ServicesSchema = require("./model/services")

const Admin = require("./routes/admin/services")


//express middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//Routes
app.get("/", (req, res) => {
    res.status(200).json("Server is active");
});

//client routes
app.use("/user", user);
app.use("/api/v1/services", services);

app.use("/admin/services/", Admin)

//Database Connection
createConnection((error) => {
    if(!error) {
        app.listen(PORT, () => {
            console.log('Sandbox Server Is Running')
        })
    }
})





module.exports = app;




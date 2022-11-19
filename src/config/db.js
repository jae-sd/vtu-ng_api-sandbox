const mongoose = require("mongoose");



const createConnection = async (cb) => {
    mongoose.connect("mongodb://localhost:27017/vtu-db", {

    }).then(client => {
        console.log("Database Connection Established Successfully")
        return cb()
    }).catch(error => {
        console.log(error);
        return cb(error)
    })
};


module.exports = createConnection;
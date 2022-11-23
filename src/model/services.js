const mongoose = require("mongoose");



const servicesSchema = new mongoose.Schema({
    M500: {
        cost: {
            type: String
        }
    },
    M1024: {
        cost: {
            type: String
        }
    }
})


const ServicesSchema = mongoose.model("services", servicesSchema);
module.exports = ServicesSchema;
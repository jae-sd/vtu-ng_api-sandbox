const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Invalid username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Invalid Email"],
        unique: true,
        lowercase: true
    },
    firstname: {
        type: String,
        required: [true, "Invalid Firstname"],
        lowercase: true
    },
    lastname: {
        type: String,
        required: [true, "Invalid Lastname"],
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: [true, "Invalid Phone Number"]
    }
});




userSchema.pre("save", async function(next){
    //const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, 10);
    next()
})



const User = mongoose.model("user", userSchema);
module.exports = User;
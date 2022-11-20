const User = require("../model/user");
const bcrypt = require("bcrypt");


const register = async (request, response) => {
    const { username, email, firstname, lastname, password, phone } = request.body;

    const exists = await User.findOne({
        username
    });

    //checks if user already exist in db
    if(exists) {
        response.status(400).json({error: "User already exists Login"});
    }else{
        const user = new User({
            username,
            email,
            firstname,
            lastname,
            password,
            phone
        });
    
        await user.save();
        response.status(200).json(user);
    }
};


const login = async (request, response) => {
    const { username, email, password, phone } = request.body;


    const user = await User.findOne({username: username});

    //console.log(user);

    const result = await bcrypt.compare(password, user.password);
    
    if(result) {
        return console.log("true", user)
    }




    
    // response.status(200).json(user);
    //response.status(401).json({error: "User not found Register"});


};



const walletBalance = (request, response) => {
    const { username, password } = request.body;

    try{          
        response.status(200).json({
            "code": "success",
            "message": "Wallet balance successfully retrieved",
            "data": {
                "balance": "120067.65",
                "currency": "NGN"
            },
            "user": {
                "username": username,
                "password": password
            }
        })
        
    } catch(error) {

        response.status(400).json({
            "code": "invalid_username", 
            "message": "Unknown username. Check again or try your email address.",
            "data": null
        });
    }

};


const verifyCustomer = (request, response) => {
    const { username, password, customer_id, service_id, variation_id } = request.body;


    try {
        response.status(200).json({
            "code": "success",
            "message": "Customer details successfully retrieved",
            "data": {
                "customer_id": "62418234034",
                "customer_name": "FIRSTNAME LASTNAME",
                "customer_address": "10 Example Street, Town, State",
                "customer_arrears": "0.00",
                "decoder_status": null,
                "decoder_due_date": null,
                "decoder_balance": null
            }
        })

    } catch (error) {

        response.status(400).json({
            "code": "failure",
            "message": "Invalid Meter Number"
        });
    }

};

//apparently numbers should be used to start an integer in json
//else the error below will be achieved
//SyntaxError: Unexpected number in JSON at position 172
//https://stackoverflow.com/questions/27361565/why-is-json-invalid-if-an-integer-begins-with-a-leading-zero#:~:text=A%20leading%200%20indicates%20an,would%20not%20contain%20an%208.


module.exports = {
    register,
    login,
    walletBalance,
    verifyCustomer
}
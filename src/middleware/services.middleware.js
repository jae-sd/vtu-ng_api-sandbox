

const purchaseAirtime = (request, response, next) => {
    const { username, password, phone, network_id, amount } = request.body;
    
    try {
        response.status(200).json({
            "code": "success",
            "message": "Airtime successfully delivered",
            "data": {
                "network": "MTN",
                "phone": "07045461790",
                "amount": "NGN2000",
                "order_id": "3100"
            }
        })

    } catch (error) {

        response.status(400).json({
            "code": "failure",
            "message": "Your wallet balance (NGN1067.65) is insufficient to make this airtime purchase of NGN2000",
            "order_id": "3289"
        });
    }

};


const purchaseData = (request, response, next) => {
    const { username, password, phone, network_id, amount } = request.body;


    try {
        response.status(200).json({
            "code": "success",
            "message": "Data successfully delivered",
            "data": {
                "network": "MTN",
                "data_plan": "MTN Data 1GB (SME) - 30 Days",
                "phone": "07045461790",
                "amount": "NGN259",
                "order_id": "2443"
            }
        })

    } catch (error) {

        response.status(400).json({
            "code": "failure",
            "message": "Invalid data variation_id. Please, crosscheck and enter the correct variation_id.",
            "order_id": "3456"
        });
    }

};


const electricity = (request, response, next) => {
    const { username, password, phone, meter_number, service_id, variation_id, amount } = request.body;

    try {
        response.status(200).json({
            "code": "success",
            "message": "Electricity bill successfully paid",
            "data": {
                "electricity": "Ikeja (IKEDC)",
                "meter_number": "62418234034",
                "token": "Token: 5345 8765 3456 3456 1232",
                "units": "47.79kwH",
                "phone": "07045461790",
                "amount": "NGN3000",
                "amount_charged": "NGN2970",
                "order_id": "4324"
            }
        })

    } catch (error) {

        response.status(400).json({
            "code": "failure",
            "message": "Invalid Meter Number",
            "order_id": "3907"
        });
    }

};


const tv = (request, response, next) => {
    const { username, password, phone, service_id, smartcard_number, variation_id } = request.body;


    try {
        response.status(200).json({
            "code": "success",
            "message": "Cable TV subscription successfully delivered",
            "data": {
                "cable_tv": "GOtv",
                "subscription_plan": "GOtv Max",
                "smartcard_number": "7032400086",
                "phone": "07045461790",
                "amount": "NGN3280",
                "amount_charged": "NGN3247.2",
                "service_fee": "NGN0.00",
                "order_id": "2876"
            }
        })

    } catch (error) {

        response.status(400).json({
            "code": "failure",
            "message": "Invalid Smartcard Number",
            "order_id": "3652"
        });
    }

};






module.exports = {
    purchaseAirtime,
    purchaseData,
    electricity,
    tv
}
const express = require("express");
const router = express.Router();
const DataSchema = require("../../model/DataSchema")


//get single service
app.get("/:key", async (request, response) => {
    const { key } = request.params.services;

    const getService = await DataSchema.findOne({
        key: {
            cost
        }
    });

    response.status(200).send(getService)
});

//get single service and update it
app.update("/:key", async (request, response) => {
    const { key } = request.params.services;
    const { cost } = request.body.services;
    const updateService = await DataSchema.findOneAndUpdate({
        key: {
            cost
        }
    });

    response.status(200).send(updateService)
});


//get single service and delete it
app.delete("/:key", async (request, response) => {
    const { key } = request.params.services;
    const deleteService = await DataSchema.findOneAndDelete({
        key: key
    });

    response.status(200).send(deleteService)
});


module.exports = router;
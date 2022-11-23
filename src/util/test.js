
// const services = [{
//     "M500": {
//         "cost": "56000"
//     }
// },
// {
//     "M1024": {
//         "cost": "1000"
//     }
// }]


//for the services object
//to avoid destructuring the deeply nested object
//pass the request.body as first param,
//and the value your are looking for

const findCostUsingKey = (serviceObj, Item) => {
    if(!(serviceObj && Item) && (typeof serviceObj !== 'object') && (typeof Item !== 'string')){
        throw new Error("serviceObj is not defined and Item is not a Key")
    }

    function findItem(serviceObj, Item) {
        return serviceObj.find((value) => {
            try {
//checks for the objects where keys is same as Item
                if(Object.keys(value)[0] === Item){
                    return Object.values(value)[0]['cost']
                }
            } catch (error) {
//due to the loop it also returns undefined for keys that didnt satisfy the condition
                if(e)
                if(error.message === "Cannot read properties of undefined (reading 'cost')"){}
            }
        })
    };
//destructures the object to return the cost object
    const cost = findItem(serviceObj, Item);
    if(cost != undefined){
        return cost[Item]
    }
}




//console.log(findCostUsingKey(serviceObjs, "M1024"))

module.exports = findCostUsingKey;
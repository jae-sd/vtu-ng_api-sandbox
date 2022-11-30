const mongoose = require("mongoose");



const airtimeSchema = new mongoose.Schema({

})

const dataSchema = new mongoose.Schema({
    M500: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M2024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M3000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M5000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M10000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    mtn-20hrs-1500: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    mtn-30gb-8000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    mtn-40gb-10000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    mtn-75gb-15000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    glo100x: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    glo200x: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    G500: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    G2000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    G1000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    G2500: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    G3000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    G4000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    G5000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    G8000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    glo10000: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    airt-500: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    airt-300x: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    M1024: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    }
})


const tvSchema = new mongoose.Schema({
    
})

//when querying the data replace _ with - (replace underscore with hyphen)
const electricitySchema = new mongoose.Schema({
    abuja_electric: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    eko_electric: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    ibadan_electric: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    ikeja_electric: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    jos_electric: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    kaduna_electric: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    kano_electric: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    portharcourt_electric: {
        id: {
            type: String
        },
        cost: {
            type: String
        }
    },
    variation_id: {
        default: [postpaid, prepaid]
    }
})


const allAvailableServices = new mongoose.Schema({
    services: {
        airtime: [airtimeSchema],
        data: [dataSchema],
        tv: [tvSchema],
        electricity: [electricitySchema]
    }
})


const DataSchema = mongoose.model("service", allAvailableServices);
module.exports = DataSchema;
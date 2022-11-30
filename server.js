const app = require("./src/index");
const PORT = process.env.PORT || 5001;
const createConnection = require("./src/config/db");



//Database Connection
createConnection((error) => {
    if(!error) {
        app.listen(PORT, () => {
            console.log('Sandbox Server Is Running')
        })
    }
})
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log("I am the best");
});

app.listen(PORT, () => {
    console.log("Resell Server Has Started!!")
})

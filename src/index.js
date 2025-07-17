const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Import Route
const productRoute = require("./routes/product.route");

// API Route
app.use(express.json())
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Product Service is Running');
});

app.listen(PORT, () => {
    console.log('APP Running');
})
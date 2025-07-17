const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('halo Dunia');
});

app.listen(PORT, () => {
    console.log('APP Running');
})
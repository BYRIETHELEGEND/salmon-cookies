'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 6969;
app.listen(PORT ,() => {
    console.log(`Server is running on port ${PORT}`);
} );
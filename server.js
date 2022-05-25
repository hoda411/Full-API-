const express = require('express');
const app = express();
app.use('/', require('./routes/coach'));
app.listen(4000);
const express = require('express'),
    app = express(),
    bp = require('body-parser'),
    path = require('path'),

    port = 8000;

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bp.json());

// app.use(session({ secret: 'codingdojorocks' }));
// app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
// require('./config/mongoose');
// require('./config/routes')(app);



app.listen(port, function() {
    console.log(`We are listening on port ${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/routes/hrDashboard')(app);
require('./server/routes/managerDashboard')(app);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})
app.get('/logout', (req, res)=>{
    res.redirect('/');
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port " + port);
    }
})
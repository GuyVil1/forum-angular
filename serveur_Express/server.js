const db = require('./models');

const bodyParser = require('body-parser');
const express = require('express');
const { RoleRouter } = require('./modules/role');
const { UserRouter } = require('./modules/users');
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});
app.use('/users', UserRouter);
app.use("/roles", RoleRouter)

db.sequelize.sync().then(()=> console.log('databasesync'))
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
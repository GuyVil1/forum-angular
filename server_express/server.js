const db = require('./models');
//TODO: How to connect to an database servor (other than sqlite)

const bodyParser = require('body-parser');
const express = require('express');
const { RoleRouter } = require('./modules/role');
const { UserRouter } = require('./modules/user');
const { DiscussionRouter } = require('./modules/discussion');
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.use('/users', UserRouter);
app.use("/roles", RoleRouter);
app.use("/discussions", DiscussionRouter);

db.sequelize.sync().then(()=> console.log('databasesync'))
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
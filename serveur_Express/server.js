const express = require('express');
const { RoleRouter } = require('./modules/role');
const { UserRouter } = require('./modules/users');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});
app.use('/users', UserRouter);
app.use("/roles", RoleRouter)

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
var express = require('express'),
apiRouter = express.Router();

user = require('./user')();
passwordGenerator = require('./generatePassword')();

apiRouter.get('', (req, res) => {
    res.status(200).send("Node api demo")
})

//===============User api===================
apiRouter.get('/user', user.getUser);

//===========Password Generator API=========
apiRouter.post('/generatePassword', passwordGenerator.generatePassword);

module.exports = apiRouter;

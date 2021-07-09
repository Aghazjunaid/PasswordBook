var express = require('express'),
apiRouter = express.Router();

user = require('./user')();
passwordGenerator = require('./generatePassword')();

apiRouter.get('', (req, res) => {
    res.status(200).send("Node api demo")
})

//===============User api===================
apiRouter.post('/register', user.registerUser);
apiRouter.get('/login', user.loginUser);

//===========Password Generator API=========
apiRouter.post('/generatePassword', passwordGenerator.generatePassword);

module.exports = apiRouter;

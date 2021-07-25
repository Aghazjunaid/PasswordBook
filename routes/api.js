var express = require('express'),
apiRouter = express.Router();

utils = require('../utils/utils')();
user = require('./user')();
passwordGenerator = require('./generatePassword')();
passwordBook = require('./passwordBook')();

apiRouter.get('', (req, res) => {
    res.status(200).send("Node api demo")
})

//===============User api===================
apiRouter.post('/register', user.registerUser);
apiRouter.get('/login', user.loginUser);


//===========Password Book API==============
apiRouter.post('/password', utils.authenticateToken, passwordBook.addPassword);
apiRouter.get('/password', utils.authenticateToken, passwordBook.getPassword);
apiRouter.get('/password/:id', utils.authenticateToken, passwordBook.getPasswordById);
apiRouter.put('/password/:id', utils.authenticateToken, passwordBook.updatePassword);
apiRouter.delete('/password/:id', utils.authenticateToken, passwordBook.deletePassword);


//===========Password Generator API=========
apiRouter.post('/generatePassword', passwordGenerator.generatePassword);

module.exports = apiRouter;

var express = require('express'),
apiRouter = express.Router();

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
apiRouter.post('/password', passwordBook.addPassword);
apiRouter.get('/password', passwordBook.getPassword);
//apiRouter.update('/password', passwordBook.addPassword);
//apiRouter.delete('/password', passwordBook.addPassword);


//===========Password Generator API=========
apiRouter.post('/generatePassword', passwordGenerator.generatePassword);

module.exports = apiRouter;

var express = require('express'),
apiRouter = express.Router();

user = require('./user')();


apiRouter.get('', (req, res) => {
    res.status(200).send("Node api demo")
})

//===============User api===================
apiRouter.get('/user', user.getUser);


module.exports = apiRouter;

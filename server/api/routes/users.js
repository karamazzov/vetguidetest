var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');

router.get('/users', ctrlUsers.usersReadAll);
router.get('/users/:agencyid', ctrlUsers.usersReadOne);
router.post('/users', ctrlUsers.usersCreateOne );
router.delete('/users/:agencyid', ctrlUsers.usersDeleteOne);
router.get('/users/auth', ctrlUsers.usersAuth);
module.exports = router;

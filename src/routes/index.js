const express = require(`express`)
const router = express.Router
const {allusers, userForm} = require('../controllers/UserControllers');

router.get('/', allusers)
router.get('/create', userForm)

module.exports = router;
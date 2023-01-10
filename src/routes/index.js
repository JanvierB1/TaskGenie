const express = require(`express`);
const router = express.Router();
const {allusers, userForm, saveUser} = require('../controllers/UserControllers');

router.get('/', allusers);
router.get('/create', userForm);
router.post('/create', saveUser);

module.exports = router;
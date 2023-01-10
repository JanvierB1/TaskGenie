const express = require(`express`);
const router = express.Router();
const {allusers, userForm, saveUser, updateUser} = require('../controllers/UserControllers');

router.get('/', allusers);
router.get('/create', userForm);
router.post('/create', saveUser);
router.post('/edit/:id', editUser);
router.post('/update/:id', updateUser);

module.exports = router;
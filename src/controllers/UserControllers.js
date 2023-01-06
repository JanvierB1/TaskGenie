const User = require('../models/User');
const user = require('../models/User');

const allusers =  async (req,res)=>{
    const users = await User.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render('homePage', {users});
}

const userForm =  async (req,res)=>{
    await res.render('createUser');
}

const saveUser =  async (req,res)=>{
    const{name, email, phone} = await req.body;
    const user = await User.create({
        name: name, email: email, phone: phone

    }).catch(error=>console.log(error));

    console.log(user)

    res.redirect('/');

    
    await res.render('createUser');
}

const editUser = async (req, res)=>{

    res.render('edit')
}

module.exports = {
    allusers, userForm, saveUser,editUser
}
    

const User = require('../models/User');
const user = require('../models/User');

const allusers =  async (req,res)=>{
    await res.render('homePage');
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

module.exports = {
    allusers, userForm, saveUser
}
    

const user = require('../models/user');

const allusers =  async (req,res)=>{
    await res.render('homePage');
}

const userForm =  async (req,res)=>{
    await res.render('create');
}

const saveUSer =  async (req,res)=>{
    
    await res.render('create');
}

module.exports = {
    allusers, userForm
}
    

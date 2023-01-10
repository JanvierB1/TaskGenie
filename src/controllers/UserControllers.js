const User = require('../models/User');
// const user = require('../models/User');

const allusers =  async (req,res)=>{
    const users = await User.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render('home', {users});
}

const userForm =  async (req,res)=>{
    await res.render('create');
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
    const {id} = await req.params;
    const user = await User.findOne({
        where{
            id:id
        },
        raw:true
    }).catch(error=>console.log(error))
    res.render('edit', {user})
}

const updateUser = async (req, res)=>{
    const {id} = req.params;
    const data = req.body;
    const select = {where:{id:id}}

    await User.update(data, selector).catch(error=>console.log(error))

    res.redirect('/')
}
module.exports = {
    allusers, userForm, saveUser,editUser
}
    

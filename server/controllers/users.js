const User = require('../models').user;
const bcrypt = require('bcrypt-nodejs');

exports.getAllUsers = async (req, res, next) => {
    try{
        let users = await User.findAll();
        return res.status(200).json({
            status: 200,
            data: users,
        })
    }catch(err){

    }
}

exports.createNewUser = (req, res, next) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, null, null, async (err, hash) => {
        if(err){
            return next(err);
        }
        try{
            let newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            })

            return res.status(200).json({
                status: 200,
                message: 'User successfully created',
                data: newUser,
            })
        }catch(err){
            return next(err);
        }
    })
    
}
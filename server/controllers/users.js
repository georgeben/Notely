const User = require('../models').user;
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

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

exports.createNewUser = async (req, res, next) => {
    let user = await User.findOne({
        where: {
            email: req.body.email,
        }
    });

    if(user){
        return res.status(403).json({
            status: 403,
            message: 'User already exists'
        })
    }
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

exports.signIn = async (req, res, next) => {
    try{
        let user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if(!user){
            return res.status(400).json({
                status: 400,
                message: 'User not found'
            })
        }

        let token  = await jwt.sign({ user }, process.env.TOKEN_KEY, {expiresIn: '12h'});

        return res.status(200).json({
            status: 200,
            token: token,
        })
        
    }catch(err){
        return next(err);
    }
}


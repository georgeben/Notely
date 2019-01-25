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

function comparePasswords(password, hash){
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, res) => {
            if(err){
                reject(err);
            }else{
                resolve(res)
            }

        })
    })
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
            let response = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            });

            let user = response[Object.keys(response)[0]];

            let token  = await jwt.sign({ user }, process.env.TOKEN_KEY, {expiresIn: '12h'});

            return res.status(200).json({
                status: 200,
                message: 'User successfully created',
                data: user,
                token: token,
            })
        }catch(err){
            return next(err);
        }
    })
    
}

exports.signIn = async (req, res, next) => {
    try{
        let response = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        let user = response[Object.keys(response)[0]];

        if(!user){
            return res.status(400).json({
                status: 400,
                message: 'User does not exist',
            })
        }

        let match = await comparePasswords(req.body.password, user.password);
        

        if(!match){
            return res.status(400).json({
                status: 400,
                message: 'Invalid password',
            })
        }

        let token  = await jwt.sign({ user }, process.env.TOKEN_KEY, {expiresIn: '12h'});

        return res.status(200).json({
            status: 200,
            token: token,
            user: user,
        })
        
    }catch(err){
        return next(err);
    }
}


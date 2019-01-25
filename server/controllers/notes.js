const Note = require('../models').note;
const jwt = require('jsonwebtoken');

function verifyToken(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.TOKEN_KEY, (err, match) => {
            if(err){
                reject(err);
            }
            resolve(match)
        })
    })
}

exports.createNote = (req, res, next) => {
    jwt.verify(req.headers.authorization, process.env.TOKEN_KEY, (err, match) => {
        if(err){
            return res.status(401).json({
                message: 'Invalid token'
            })
        }
        let user = match.user;
        Note.create({
            title: req.body.title,
            content: req.body.content,
            user_id: user.id,
            shared: req.body.shared,
        })
        .then((result) => { 
            res.status(200).json({
                message: "Success",
                data: result,
            })
        })
        .catch((err) => {
            return next(err);
        })
    })
}

exports.displayAllNotes = async (req, res, next) => {
    try{
        let notes = await Note.findAll();
        res.status(200).json({
            status: 200,
            data: notes,
        })
    }catch(err){
        return next(err);
    }
}

exports.findOneNote = async (req, res, next) => {
    let title = req.params.title;
    try{
        let note = await Note.findOne({
            where: {
                title: title,
            }
        });

        if(!note){
            return res.status(404).json({
                status: 404,
                message: 'Note does not exist'
            })
        }

        res.status(200).json({
            status: 200,
            data: note,
        })
    }catch(err){
        return next(err);
    }
    
}

exports.deleteNote = async (req, res, next) => {
    try{
        let response = await Note.destroy({
            where: {
                id: req.params.id,
            }
        });

        if(!response){
            return res.status(404).json({
                status: 404,
                message: 'Note does not exist'
            })
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully deleted note'
        })
    }catch(err){
        return next(err);
    }
    
}

exports.updateNote = async (req, res, next) => {
    let noteId = req.params.id;
    let token = req.headers.authorization;

    try{
        let match = await verifyToken(token);
        let user = match.user;

        if(user){
            let note = await Note.findById(noteId);
            if(!note){
                return res.status(404).json({
                    status: 404,
                    message: 'Note does not exist'
                });
            }
    
            let updatedNote = await note.update({
                title: req.body.title,
                content: req.body.content,
            });
    
            res.status(200).json({
                status: 200,
                message: 'Successfully updated note',
                data: updatedNote
            })
        }

    }catch(err){
        if(err.message == 'invalid signature'){
            return res.status(403).json({
                message: 'Unauthorized action'
            })
        }
        return next(err);
    }
}

exports.getUserNotes = async (req, res, next) => {
    let user_id = req.params.id;
    try{
        let userNotes = await Note.findAll({
            where: {
                user_id: user_id,
            }
        });

        return res.status(200).json({
            data: userNotes,
        })
    }catch(err){
        return next(err);
    }
}

exports.getSingleNote = async (req, res, next) =>{
    let id = req.params.id;

    try{
        let note = await Note.findById(id);
        return res.status(200).json({
            note: note,
        })
    }catch(err){
        return next(err);
    }
}
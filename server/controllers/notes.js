const Note = require('../models').note;

exports.create = async (req, res, next) => {
    try{
        let newNote = await Note.create({
            title: req.body.title,
            content: req.body.content,
        })

        return res.status(200).json({
            message: 'Successfully created',
            note: newNote,
        })
    }catch(err){
        return next(err);
    }
    
}

exports.display = (req, res, next) => {
    Note.findOne().then(function(note){
        console.log(note);
        return res.status(200).json({
            message: note
        })
    })
}
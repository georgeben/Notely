const Note = require('../models').note;

exports.createNote = async (req, res, next) => {
    try{
        let newNote = await Note.create({
            title: req.body.title,
            content: req.body.content,
        })

        res.status(200).json({
            message: 'Successfully created',
            note: newNote,
        })
    }catch(err){
        return next(err);
    }
    
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

        res.status(200).json({
            status: 200,
            message: 'Successfully deleted note'
        })
    }catch(err){
        return next(err);
    }
    
}
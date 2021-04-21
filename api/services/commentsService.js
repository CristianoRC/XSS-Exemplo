const commentModel = require('../models/commentModel')

const getAll = () => {
    return commentModel.getAll();
};

const insertComment = (comment) => {
    commentModel.insert(comment);
};


module.exports = { getAll, insertComment };
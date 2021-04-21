const fs = require('fs');
const FILE_PATH = `${__dirname}/../data/data.json`;

const getAll = () => {
    const fileText = fs.readFileSync(FILE_PATH);
    return JSON.parse(fileText);
}

const insert = (comment) => {
    const allComments = getAll();
    allComments.push(comment);
    fs.writeFileSync(FILE_PATH, JSON.stringify(allComments));
}

module.exports = { getAll, insert };
const fs = require('fs');
const filePath = `${__dirname}/../data/data.json`;

const getAll = () => {
    const fileText = fs.readFileSync(filePath);
    return JSON.parse(fileText);
}

const insert = (comment) => {

}

module.exports = { getAll, insert };
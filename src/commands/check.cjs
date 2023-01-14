const fs = require('fs/promises');
const {createFile} = require('./Partidas.cjs');

async function readGame (path) {
    try {
        const data = await fs.readFile(path, {encoding: 'utf8'});
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

function deleteGame(path) {
    try {
        fs.unlink(path);
    } catch (err) {
        if (err.code == "ENOENT") {
            createFile(path);
        };
    }
}

module.exports = {
    readGame,
    deleteGame
}

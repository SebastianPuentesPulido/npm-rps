const fs = require('fs/promises');
const {createFile} = require('./Partidas.cjs');

/**
 * 
 * @param {String} path the path of the file will be read
 */
async function readGame (path) {
    try {
        const data = await fs.readFile(path, {encoding: 'utf8'});
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}


/**
 * 
 * @param {String} path the path of the file will be deleted
 */
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

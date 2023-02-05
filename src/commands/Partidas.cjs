var fs = require('fs');

/**
 * 
 * @param {String} name the name of the file to be created
 * @param {String} [data] the content of the file
 */
function createFile (name, data) {
    fs.appendFile(name,data, function (err) {
        if (err) throw err;
        console.log("partida salvada");
    }) 
}


module.exports = {
    createFile
}
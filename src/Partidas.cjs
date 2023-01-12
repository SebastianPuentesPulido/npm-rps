var fs = require('fs');

function createFile (name, data) {
    fs.appendFile(name,data, function (err) {
        if (err) throw err;
        console.log("partida salvada");
    }) 
}


module.exports = {
    createFile
}
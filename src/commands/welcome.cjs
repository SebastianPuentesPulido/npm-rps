var figlet = require('figlet');

function welcome(data) {
    figlet(data, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
}

module.exports = {
    welcome
}
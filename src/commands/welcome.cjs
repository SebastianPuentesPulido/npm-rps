var figlet = require('figlet');

/**
 * 
 * @param {String} data the data will become in a quote
 * @returns {void}} the quote
 */
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
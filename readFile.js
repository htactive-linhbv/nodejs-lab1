
const fetch = require('node-fetch');
const checkFolder = require('./checkFolder');
const fs = require('fs');
const checkLink = require('./checkLink');

let read = (urlFile, intPage) => {
    let url = checkLink(urlFile,intPage);
    fetch(url)
        .then(res => res.text())
        .then(body => {
            console.log(`doc file ${intPage} thanh cong`);

            // kiem tra va tao folder...
            checkFolder(urlFile,body,intPage);
        });
};



module.exports = read;
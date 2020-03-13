
const fetch = require('node-fetch');
const saveFile = require('./saveFile');

let read=(urlFile,intPage)=>{
    fetch(urlFile+intPage)
    .then(res => res.text())
    .then(body =>{ console.log('doc file thanh cong');
                           
    });
};



module.exports = read;
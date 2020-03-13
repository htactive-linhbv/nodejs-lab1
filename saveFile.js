const fs = require('fs');
const fetch = require('node-fetch');



function saveFile(nameFile,dataFile){
    fs.writeFile(nameFile,dataFile,(err)=>{
        if(err)
        throw err;
        else
            console.log('Ghi file thanh cong')
    } )
}
module.exports = saveFile;

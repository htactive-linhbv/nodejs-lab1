const fs = require('fs');
const fetch = require('node-fetch');




function saveFile(nameFile,dataFile,index){
    fs.writeFile(nameFile,dataFile,(err)=>{
        if(err)
        throw err;
        else
            console.log(`Ghi file ${index} thanh cong`);
    } )
}
module.exports = saveFile;

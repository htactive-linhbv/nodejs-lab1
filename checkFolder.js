const fs = require('fs');
const url = require('url');

// lay host name tu url
function getHostName(host){
    let  parseUrl = url.parse(host, true);
    return parseUrl.hostname;
 }

// kiếm tra thư mục tồn tại hay chưa
function ktFolder(nameUrl) {
    let nameFolder = `/${date.getDate()}_${date.getMonth()}_${date.getFullYear()}`
    if (!fs.existsSync(nameFolder)) fs.mkdirSync(nameFolder);

    nameFolder =nameFolder + `/${getHostName(nameUrl)}`
    if (!fs.existsSync(nameFolder)) fs.mkdirSync(nameFolder);


}



module.exports = ktFolder;
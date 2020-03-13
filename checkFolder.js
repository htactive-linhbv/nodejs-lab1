const fs = require('fs');
const url = require('url');
const saveFile = require('./saveFile');

// lay host name tu url
function getHostName(host){
    let  parseUrl = url.parse(host, true);
    return parseUrl.hostname;
 }

// kiếm tra thư mục tồn tại hay chưa
function ktFolder(nameUrl,data,page) {
    let date = new Date()
    let nameFolder = `./public/${date.getDate()}_${date.getMonth()}_${date.getFullYear()}`
    if (!fs.existsSync(nameFolder)){ fs.mkdirSync(nameFolder);
                                    console.log(`Tao folder ${nameFolder} thanh cong`);    
                                    };

    nameFolder =nameFolder + `/${getHostName(nameUrl)}`
    if (!fs.existsSync(nameFolder)) {fs.mkdirSync(nameFolder);
                                       console.log(`tao folder ${nameFolder} thanh cong`); 
    };
    console.log(`tao folder ${getHostName(nameUrl)}  thanh cong`)

    // nếu tạo thành công .. tiến hành save file
    saveFile(`${nameFolder}/page${page}.html`,data,page);
}



module.exports = ktFolder;
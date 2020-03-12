const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');




function readFile(urlFile){
    fetch(urlFile)
    .then(res => res.text())
    .then(body => console.log(body));
}


readFile("https://viblo.asia/newest");


function saveFile(nameFile){
    fs.writeFile(name.html,data,(err)=>{
        if(err)
        throw err;
        else
            console.log('Ghi file thanh cong')
    } )
}







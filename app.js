const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');
//const argv = require("yargs").argv;

// add module 
const readFile = require('./readFile');
// const saveFile = require('./saveFile.js');

//get argv 
function ktArgv(){
    if(typeof process.argv[2]=='null'||typeof process.argv=='undefined'){
        console.log('ban chua nhap argv .. gia tri mac dinh la 5');
        process.argv[2]=5;
    }
}
ktArgv();


//lay url tu file json
const links = JSON.parse(fs.readFileSync("./links.json"));

//lặp tất cả link trong json
for (link of links) {
    // đọc và ghi file từ page 1 đến n;
    for (let i = 1; i <= process.argv[2]; i++) {

        readFile(link, i);
    }
}

















const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');
const argv = require("yargs").argv;

// add module 
const readFile = require('./readFile');
// const saveFile = require('./saveFile.js');

//lay url tu file json
const links = JSON.parse(fs.readFileSync("./links.json"));

//lặp tất cả link trong json
for (link of links) {
    // đọc và ghi file từ page 1 đến n;
    for (let i = 1; i <= argv._; i++) {

        readFile(link, i);
    }
}

















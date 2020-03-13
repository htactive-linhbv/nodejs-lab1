const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');
const argv = require("yargs").argv;

// add module 
const readFile = require('./readFile');
// const saveFile = require('./saveFile.js');






// kiem tra link co dau / 
function getUrl(url) {
    if (url[url.length - 1] != "/") url = url + "/";   
    return url;
}

readFile(getUrl('https://viblo.asia'),2).then(body=>{
    console.log(body);
})

readFile("https://viblo.asia/newest");















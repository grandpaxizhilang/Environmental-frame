var fs = require('fs')

function GetCode(){
    var code = '';
    code += fs.readFileSync(`${__dirname}/HTMLDivElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLBodyElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLFormElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLCanvasElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLHeadElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLHtmlElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLIFrameElement.js`) + "\r\n"



    
    // code += fs.readFileSync(`${__dirname}/.js`) + "\r\n"
    // code += fs.readFileSync(`${__dirname}/.js`) + "\r\n"
    // code += fs.readFileSync(`${__dirname}/.js`) + "\r\n"

    return code
}
    
module.exports = {
    GetCode
}

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
    code += fs.readFileSync(`${__dirname}/HTMLScriptElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLAnchorElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLButtonElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLInputElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLLabelElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLLinkElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLImageElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLAudioElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLOptionElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLParagraphElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLHeadingElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLSpanElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLUListElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLLIElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/HTMLMetaElement .js`) + "\r\n"
    

    return code
}
    
module.exports = {
    GetCode
}

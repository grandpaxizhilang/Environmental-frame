var fs = require('fs');
const { json } = require('stream/consumers');

//框架工具模块
var vmtools = require(`${__dirname}/tools/tools.node`)
var htmlelements = require(`${__dirname}/browser/HTMLElements/HTMLElements.node`)

function run(config,func_text) {
    var code = ''
    //引入用户框架工具代码
    code += vmtools.GetCode() + '\r\n';

    //引入用户框架配置  
    for (let item in config) {
        code += 'catchvm.memory.config.' + item + '=' + config[item] + ';\r\n';
    }

    code += func_text + ';\r\n';
    // code +=  'catchvm.memory.config.proxy = true;\r\n';

    //引入浏览器相关
    code += fs.readFileSync(`${__dirname}/browser/EventTarget.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Event.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/UIEvent.js`) + "\r\n"

    code += fs.readFileSync(`${__dirname}/browser/WindowProperties.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Node.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Element.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/HTMLElement.js`) + "\r\n"


    code += fs.readFileSync(`${__dirname}/browser/Window.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Location.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Navigator.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/History.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Screen.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/localStorage.js`) + "\r\n"



    code += fs.readFileSync(`${__dirname}/browser/Plugin.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/MimeType.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/PluginArray.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/MimeTypeArray.js`) + "\r\n"


    
    code += htmlelements.GetCode() + '\r\n'

    code += fs.readFileSync(`${__dirname}/browser/Document.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/HTMLDocument.js`) + "\r\n"

    code += 'debugger;' + '\r\n'
    return code
}

module.exports = {
    run
}


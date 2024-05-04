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
    code += fs.readFileSync(`${__dirname}/browser/DOMException.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Event.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/UIEvent.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/TextMetrics.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CanvasRenderingContext2D.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/MouseEvent.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Option.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/BaseAudioContext.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/AudioContext.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/External.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/WebGLRenderingContext.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/WebGL2RenderingContext.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/ImageBitmapRenderingContext.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Scheduling.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/UserActivation.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Geolocation.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/NetworkInformation.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Bluetooth.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Clipboard.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CredentialsContainer.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Keyboard.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/NavigatorManagedData.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/StorageManager.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/ServiceWorkerContainer.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/VirtualKeyboard.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/WakeLock.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Ink.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/HID.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/LockManager.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/MediaCapabilities.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/MediaSession.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Permissions.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Presentation.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Serial.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/GPU.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/USB.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/WindowControlsOverlay.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/XRSystem.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/NavigatorUAData.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CSSStyleDeclaration.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/DOMImplementation.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/WebGLDebugRendererInfo.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/HTMLAllCollection.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/DOMTokenList.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Performance.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/ScreenOrientation.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CSSRule.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CSSStyleRule.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/StyleSheet.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CSSRuleList.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CSSGroupingRule.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CSSConditionRule.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CSSMediaRule.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/MessageEvent.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Selection.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CustomEvent.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/TimeRanges.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/DOMParser.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/AbstractRange.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Range.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/DataTransfer.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/URL.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Blob.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/TextDecoder.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/TextEncoder.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/URLSearchParams.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Crypto.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/IDBRequest.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/IDBOpenDBRequest.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/IDBFactory.js`) + "\r\n"
    


    code += fs.readFileSync(`${__dirname}/browser/WindowProperties.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Node.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/NodeList.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Attr.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/NamedNodeMap.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Element.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/HTMLElement.js`) + "\r\n"




    code += fs.readFileSync(`${__dirname}/browser/XMLHttpRequestEventTarget.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/XMLHttpRequest.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/MediaDevices.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Plugin.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/MimeType.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/PluginArray.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/MimeTypeArray.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CharacterData.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Text.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/CDATASection.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/SVGElement.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/DocumentType.js`) + "\r\n"
    
    


    code += fs.readFileSync(`${__dirname}/browser/Window.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Location.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Navigator.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/History.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Screen.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Storage.js`) + "\r\n"

    
    
    code += htmlelements.GetCode() + '\r\n'

    code += fs.readFileSync(`${__dirname}/browser/Audio.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Document.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/HTMLDocument.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Image.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/ImageData.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/RegExp.js`) + "\r\n"
    code += fs.readFileSync(`${__dirname}/browser/Object.js`) + "\r\n"
    

    code += '/////////////////////////////////////////////////////////////////\r\nconsole.clear()\r\ndebugger;' + '\r\n'
    return code
}

module.exports = {
    run
}


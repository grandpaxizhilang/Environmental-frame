var Navigator = function Navigator(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Navigator)
Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Navigator.prototype.webdriver = false;
Navigator.prototype.plugins = catchvm.memory.PluginArray._;
Navigator.prototype.mimeTypes = catchvm.memory.MimeTypeArray._;
Navigator.prototype.mediaDevices = catchvm.memory.mediaDevices;
Navigator.prototype.language = "zh-CN";
Navigator.prototype.languages = ["zh-CN","en","en-GB","en-US"];
Navigator.prototype.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0'
Navigator.prototype.vendor = 'Google Inc.'
Navigator.prototype.appName = 'Netscape';
Navigator.prototype.appVersion = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0'
Navigator.prototype.cookieEnabled = true;
Navigator.prototype.deviceMemory = 8;
Navigator.prototype.maxTouchPoints = 0;
Navigator.prototype.doNotTrack = null;
Navigator.prototype.productSub = '20030107';
Navigator.prototype.vendorSub = '';
Navigator.prototype.pdfViewerEnabled = true;
Navigator.prototype.appCodeName = 'Mozilla';
Navigator.prototype.onLine = true;


Navigator.prototype.scheduling = catchvm.memory.scheduling
Navigator.prototype.userActivation = catchvm.memory.userActivation
Navigator.prototype.geolocation = catchvm.memory.geolocation
Navigator.prototype.connection = catchvm.memory.connection
Navigator.prototype.bluetooth = catchvm.memory.bluetooth
Navigator.prototype.clipboard = catchvm.memory.clipboard
Navigator.prototype.credentials = catchvm.memory.credentials
Navigator.prototype.keyboard = catchvm.memory.keyboard
Navigator.prototype.managed = catchvm.memory.managed
Navigator.prototype.storage = catchvm.memory.storage
Navigator.prototype.serviceWorker = catchvm.memory.serviceWorker
Navigator.prototype.virtualKeyboard = catchvm.memory.virtualKeyboard
Navigator.prototype.wakeLock = catchvm.memory.wakeLock
Navigator.prototype.ink = catchvm.memory.ink
Navigator.prototype.hid = catchvm.memory.hid
Navigator.prototype.locks = catchvm.memory.locks
Navigator.prototype.mediaCapabilities = catchvm.memory.mediaCapabilities
Navigator.prototype.mediaSession = catchvm.memory.mediaSession
Navigator.prototype.permissions = catchvm.memory.permissions
Navigator.prototype.presentation = catchvm.memory.presentation
Navigator.prototype.serial = catchvm.memory.serial
Navigator.prototype.gpu = catchvm.memory.gpu
Navigator.prototype.usb = catchvm.memory.usb
Navigator.prototype.windowControlsOverlay = catchvm.memory.windowControlsOverlay
Navigator.prototype.xr = catchvm.memory.xr
Navigator.prototype.userAgentData = catchvm.memory.userAgentData





Navigator.prototype.registerProtocolHandler = function registerProtocolHandler(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.registerProtocolHandler)

Navigator.prototype.setAppBadge = function setAppBadge(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.setAppBadge)

Navigator.prototype.getUserMedia = function getUserMedia(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.getUserMedia)

Navigator.prototype.getBattery = function getBattery(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.getBattery)

Navigator.prototype.clearAppBadge = function clearAppBadge(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.clearAppBadge)

Navigator.prototype.vibrate = function vibrate(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.vibrate)

Navigator.prototype.sendBeacon = function sendBeacon(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.sendBeacon)

Navigator.prototype.getGamepads = function getGamepads(){
    debugger;
    return [null,]
};catchvm.func_set_natvie(Navigator.prototype.getGamepads)


//网站自己新定义的方法和属性(可删除)↓↓↓↓↓↓↓↓↓↓
Navigator.prototype.hardwareConcurrency = 12;
Navigator.prototype.platform = 'Win32';
Navigator.prototype.product = 'Gecko';
Navigator.prototype.webkitTemporaryStorage = {}
Navigator.prototype.webkitPersistentStorage = {}


Navigator.prototype.unregisterProtocolHandler = function unregisterProtocolHandler(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.unregisterProtocolHandler)

Navigator.prototype.getInstalledRelatedApps = function getInstalledRelatedApps(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.getInstalledRelatedApps)

Navigator.prototype.webkitGetUserMedia = function webkitGetUserMedia(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.webkitGetUserMedia)

Navigator.prototype.requestMediaKeySystemAccess = function requestMediaKeySystemAccess(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.requestMediaKeySystemAccess)

Navigator.prototype.requestMIDIAccess = function requestMIDIAccess(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.requestMIDIAccess)

Navigator.prototype.javaEnabled = function javaEnabled(){
    debugger;
    return false;
};catchvm.func_set_natvie(Navigator.prototype.javaEnabled)

//网站自己新定义的方法和属性(可删除)↑↑↑↑↑↑↑↑↑↑


navigator = {};
navigator.__proto__ = Navigator.prototype;


for (let temp in Navigator.prototype) {
    navigator[temp] = Navigator.prototype[temp];
    if(!(typeof Navigator.prototype[temp] === 'function')){       
        Navigator.prototype.__defineGetter__(temp, function () {
            throw new TypeError("Illegal invocation");
        });
    }  
}

///////////////////////////////////////////////////////////////

navigator = catchvm.proxy(navigator);




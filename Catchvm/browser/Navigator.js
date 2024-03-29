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
Navigator.prototype.plugins = [];
Navigator.prototype.mimeTypes = [];
Navigator.prototype.languages = ["zh-CN","en","en-GB","en-US"];
Navigator.prototype.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0'


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





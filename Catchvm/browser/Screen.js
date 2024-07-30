var Screen = function Screen(){

};catchvm.func_set_natvie(Screen)
Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
        value: "Screen",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Screen.prototype.availHeight = 1122;
Screen.prototype.availWidth = 2048;
Screen.prototype.availLeft = 0;
Screen.prototype.availTop = 0;
Screen.prototype.width = 2048;
Screen.prototype.height = 1152;
Screen.prototype.colorDepth = 24;
Screen.prototype.pixelDepth = 24;


Screen.prototype.orientation = catchvm.memory.orientation

screen = {};
screen.__proto__ = Screen.prototype;

for (var property_ in Screen.prototype) {
    screen[property_] = Screen.prototype[property_];
    if(!(typeof Screen.prototype[property_] === 'function')){       
        Screen.prototype.__defineGetter__(property_, function () {
            throw new TypeError("Illegal invocation");
        });
    }  
}

///////////////////////////////////////////////////////////////

screen = catchvm.proxy(screen);

///////////////////////////////////////////////////////////////
// Screen.prototype.__defineGetter__("availHeight",function(){
//     throw TypeError("Illegal invocation")
// })
// Screen.prototype.__defineGetter__("availWidth",function(){
//     throw TypeError("Illegal invocation")
// })
// Screen.prototype.__defineGetter__("availLeft",function(){
//     throw TypeError("Illegal invocation")
// })
// Screen.prototype.__defineGetter__("availTop",function(){
//     throw TypeError("Illegal invocation")
// })
// Screen.prototype.__defineGetter__("width",function(){
//     throw TypeError("Illegal invocation")
// })
// Screen.prototype.__defineGetter__("height",function(){
//     throw TypeError("Illegal invocation")
// })
// Screen.prototype.__defineGetter__("colorDepth",function(){
//     throw TypeError("Illegal invocation")
// })
// Screen.prototype.__defineGetter__("pixelDepth",function(){
//     throw TypeError("Illegal invocation")
// })



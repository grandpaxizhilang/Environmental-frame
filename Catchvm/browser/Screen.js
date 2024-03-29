var Screen = function Screen(){

};catchvm.func_set_natvie(Screen)
Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
        value: "Screen",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Screen.prototype.availHeight = 834;
Screen.prototype.availWidth = 1536;



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

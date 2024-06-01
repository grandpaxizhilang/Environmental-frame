var ScreenOrientation = function ScreenOrientation(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(ScreenOrientation)
Object.defineProperties(ScreenOrientation.prototype, {
    [Symbol.toStringTag]: {
        value: "ScreenOrientation",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
ScreenOrientation.prototype.angle = 0
ScreenOrientation.prototype.onchange = null
ScreenOrientation.prototype.type = "landscape-primary"

///////////////////////////////////////////////////////////////
ScreenOrientation.prototype.__proto__ = EventTarget.prototype

catchvm.memory.orientation = {}
catchvm.memory.orientation.__proto__ = ScreenOrientation.prototype
catchvm.memory.orientation = catchvm.proxy(catchvm.memory.orientation)

///////////////////////////////////////////////////////////////
ScreenOrientation.prototype.__defineGetter__("angle",function(){
    throw TypeError("Illegal invocation")
})
ScreenOrientation.prototype.__defineGetter__("onchange",function(){
    throw TypeError("Illegal invocation")
})
ScreenOrientation.prototype.__defineGetter__("type",function(){
    throw TypeError("Illegal invocation")
})




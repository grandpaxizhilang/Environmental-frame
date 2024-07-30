
var XRSystem = function XRSystem(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(XRSystem)
Object.defineProperties(XRSystem.prototype, {
    [Symbol.toStringTag]: {
        value: "XRSystem",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
XRSystem.prototype.ondevicechange = null

///////////////////////////////////////////////////////////////
XRSystem.prototype.__proto__ = EventTarget.prototype

catchvm.memory.xr = {}
catchvm.memory.xr.__proto__ = XRSystem.prototype
catchvm.memory.xr = catchvm.proxy(catchvm.memory.xr)

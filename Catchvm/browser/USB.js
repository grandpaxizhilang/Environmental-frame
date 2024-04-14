var USB = function USB(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(USB)
Object.defineProperties(USB.prototype, {
    [Symbol.toStringTag]: {
        value: "USB",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
USB.prototype.onconnect = null
USB.prototype.ondisconnect = null
///////////////////////////////////////////////////////////////
USB.prototype.__proto__ = EventTarget.prototype

catchvm.memory.usb = {}
catchvm.memory.usb.__proto__ = USB.prototype
catchvm.memory.usb = catchvm.proxy(catchvm.memory.usb)


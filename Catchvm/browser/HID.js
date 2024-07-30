var HID = function HID(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HID)
Object.defineProperties(HID.prototype, {
    [Symbol.toStringTag]: {
        value: "HID",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
HID.prototype.onconnect = null
HID.prototype.ondisconnect = null
///////////////////////////////////////////////////////////////
HID.prototype.__proto__ = EventTarget.prototype

catchvm.memory.hid = {}
catchvm.memory.hid.__proto__ = HID.prototype
catchvm.memory.hid = catchvm.proxy(catchvm.memory.hid)
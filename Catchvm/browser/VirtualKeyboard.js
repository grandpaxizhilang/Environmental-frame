var VirtualKeyboard = function VirtualKeyboard(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(VirtualKeyboard)
Object.defineProperties(VirtualKeyboard.prototype, {
    [Symbol.toStringTag]: {
        value: "VirtualKeyboard",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
VirtualKeyboard.prototype.__proto__ = EventTarget.prototype

catchvm.memory.virtualKeyboard = {}
catchvm.memory.virtualKeyboard.__proto__ = VirtualKeyboard.prototype
catchvm.memory.virtualKeyboard = catchvm.proxy(catchvm.memory.virtualKeyboard)
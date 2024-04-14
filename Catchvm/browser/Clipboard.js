var Clipboard = function Clipboard(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Clipboard)
Object.defineProperties(Clipboard.prototype, {
    [Symbol.toStringTag]: {
        value: "Clipboard",
        configurable: true
    }
});
Clipboard.prototype.__proto__ = EventTarget.prototype

catchvm.memory.clipboard = {}
catchvm.memory.clipboard.__proto__ = Clipboard.prototype
catchvm.memory.clipboard = catchvm.proxy(catchvm.memory.clipboard)


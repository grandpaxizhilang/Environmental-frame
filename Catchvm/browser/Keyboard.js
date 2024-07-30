var Keyboard = function Keyboard(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Keyboard)
Object.defineProperties(Keyboard.prototype, {
    [Symbol.toStringTag]: {
        value: "Keyboard",
        configurable: true
    }
});

catchvm.memory.keyboard = {}
catchvm.memory.keyboard.__proto__ = Keyboard.prototype
catchvm.memory.keyboard = catchvm.proxy(catchvm.memory.keyboard)
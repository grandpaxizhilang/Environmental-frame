var Bluetooth = function Bluetooth(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Bluetooth)
Object.defineProperties(Bluetooth.prototype, {
    [Symbol.toStringTag]: {
        value: "Bluetooth",
        configurable: true
    }
});
Bluetooth.prototype.__proto__ = EventTarget.prototype

catchvm.memory.bluetooth = {}
catchvm.memory.bluetooth.__proto__ = Bluetooth.prototype
catchvm.memory.bluetooth = catchvm.proxy(catchvm.memory.bluetooth)
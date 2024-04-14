var WakeLock = function WakeLock(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(WakeLock)
Object.defineProperties(WakeLock.prototype, {
    [Symbol.toStringTag]: {
        value: "WakeLock",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
catchvm.memory.wakeLock = {}
catchvm.memory.wakeLock.__proto__ = WakeLock.prototype
catchvm.memory.wakeLock = catchvm.proxy(catchvm.memory.wakeLock)


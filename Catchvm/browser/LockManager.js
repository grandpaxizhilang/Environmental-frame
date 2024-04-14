var LockManager = function LockManager(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(LockManager)
Object.defineProperties(LockManager.prototype, {
    [Symbol.toStringTag]: {
        value: "LockManager",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
catchvm.memory.locks = {}
catchvm.memory.locks.__proto__ = LockManager.prototype
catchvm.memory.locks = catchvm.proxy(catchvm.memory.ink)





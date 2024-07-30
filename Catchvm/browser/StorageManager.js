var StorageManager = function StorageManager(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(StorageManager)
Object.defineProperties(StorageManager.prototype, {
    [Symbol.toStringTag]: {
        value: "StorageManager",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
StorageManager.prototype.__proto__ = EventTarget.prototype

catchvm.memory.storage = {}
catchvm.memory.storage.__proto__ = StorageManager.prototype
catchvm.memory.storage = catchvm.proxy(catchvm.memory.storage)
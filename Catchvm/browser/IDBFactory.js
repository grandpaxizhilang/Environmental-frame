var IDBFactory = function IDBFactory(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(IDBFactory)
Object.defineProperties(IDBFactory.prototype, {
    [Symbol.toStringTag]: {
        value: "IDBFactory",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
IDBFactory.prototype.open = function open(){
    // debugger;
    return catchvm.memory.IDBOpenDBRequest
};catchvm.func_set_natvie(IDBFactory.prototype.open)


///////////////////////////////////////////////////////////////

indexedDB = {}
indexedDB.__proto__ = IDBFactory.prototype
indexedDB = catchvm.proxy(indexedDB)
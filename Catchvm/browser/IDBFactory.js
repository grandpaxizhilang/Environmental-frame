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


///////////////////////////////////////////////////////////////

indexedDB = {}
indexedDB.__proto__ = IDBFactory.prototype
indexedDB = catchvm.proxy(indexedDB)
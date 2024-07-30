var IDBOpenDBRequest = function IDBOpenDBRequest(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(IDBOpenDBRequest);
Object.defineProperties(IDBOpenDBRequest.prototype, {
    [Symbol.toStringTag]: {
        value: "IDBOpenDBRequest",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////
IDBOpenDBRequest.prototype.__proto__ = IDBRequest.prototype

catchvm.memory.IDBOpenDBRequest = {}
catchvm.memory.IDBOpenDBRequest.__proto__ = IDBOpenDBRequest.prototype
catchvm.memory.IDBOpenDBRequest = catchvm.proxy(catchvm.memory.IDBOpenDBRequest)
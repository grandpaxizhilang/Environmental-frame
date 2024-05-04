var IDBRequest = function IDBRequest(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(IDBRequest);
Object.defineProperties(IDBRequest.prototype, {
    [Symbol.toStringTag]: {
        value: "IDBRequest",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////
IDBRequest.prototype.__proto__ = EventTarget.prototype


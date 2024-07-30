var Crypto = function Crypto(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Crypto)
Object.defineProperties(Crypto.prototype, {
    [Symbol.toStringTag]: {
        value: "Crypto",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Crypto.prototype.subtle = {}

///////////////////////////////////////////////////////////////

crypto = {}
crypto.__proto__ = Crypto.prototype
crypto = catchvm.proxy(crypto)
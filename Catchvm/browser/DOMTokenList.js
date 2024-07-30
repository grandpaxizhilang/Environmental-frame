var DOMTokenList = function DOMTokenList(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(DOMTokenList)
Object.defineProperties(DOMTokenList.prototype, {
    [Symbol.toStringTag]: {
        value: "DOMTokenList",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
DOMTokenList.prototype.length = 0
DOMTokenList.prototype.value = ''

///////////////////////////////////////////////////////////////

catchvm.memory.domTokenList = {}
catchvm.memory.domTokenList.__proto__ = DOMTokenList.prototype
catchvm.memory.domTokenList = catchvm.proxy(catchvm.memory.domTokenList)
var DOMImplementation = function DOMImplementation(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(DOMImplementation)
Object.defineProperties(DOMImplementation.prototype, {
    [Symbol.toStringTag]: {
        value: "DOMImplementation",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
catchvm.memory.implementation = {}
catchvm.memory.implementation.__proto__ = DOMImplementation.prototype
catchvm.memory.implementation = catchvm.proxy(catchvm.memory.implementation)



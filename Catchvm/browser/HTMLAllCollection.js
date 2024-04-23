var HTMLAllCollection = function HTMLAllCollection(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(HTMLAllCollection)
Object.defineProperties(HTMLAllCollection.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLAllCollection",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

HTMLAllCollection.prototype.length = 0

///////////////////////////////////////////////////////////////

catchvm.memory.htmlAllCollection = {}
catchvm.memory.htmlAllCollection.__proto__ = HTMLAllCollection.prototype
catchvm.memory.htmlAllCollection = catchvm.proxy(catchvm.memory.htmlAllCollection)

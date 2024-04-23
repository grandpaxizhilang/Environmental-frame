var NamedNodeMap = function NamedNodeMap(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(NamedNodeMap)
Object.defineProperties(NamedNodeMap.prototype, {
    [Symbol.toStringTag]: {
        value: "NamedNodeMap",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
NamedNodeMap.prototype[0] = catchvm.memory.Attr
NamedNodeMap.prototype.length = 1

///////////////////////////////////////////////////////////////

catchvm.memory.namedNodeMap = {
    0 : catchvm.memory.Attr
}
catchvm.memory.namedNodeMap.__proto__ = NamedNodeMap.prototype
catchvm.memory.namedNodeMap = catchvm.proxy(catchvm.memory.namedNodeMap)

var Attr = function Attr(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Attr)
Object.defineProperties(Attr.prototype, {
    [Symbol.toStringTag]: {
        value: "Attr",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
Attr.prototype.__proto__ = Node.prototype

catchvm.memory.Attr = {
    nodeName : 'class'
}
catchvm.memory.Attr.__proto__ = Attr.prototype
catchvm.memory.Attr = catchvm.proxy(catchvm.memory.Attr)
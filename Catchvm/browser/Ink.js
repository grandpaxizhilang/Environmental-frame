var Ink = function Ink(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Ink)
Object.defineProperties(Ink.prototype, {
    [Symbol.toStringTag]: {
        value: "Ink",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
catchvm.memory.ink = {}
catchvm.memory.ink.__proto__ = Ink.prototype
catchvm.memory.ink = catchvm.proxy(catchvm.memory.ink)


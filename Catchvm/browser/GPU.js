var GPU = function GPU(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(GPU)
Object.defineProperties(GPU.prototype, {
    [Symbol.toStringTag]: {
        value: "GPU",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
catchvm.memory.gpu = {}
catchvm.memory.gpu.__proto__ = GPU.prototype
catchvm.memory.gpu = catchvm.proxy(catchvm.memory.gpu)






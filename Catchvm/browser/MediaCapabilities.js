var MediaCapabilities = function MediaCapabilities(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(MediaCapabilities)
Object.defineProperties(MediaCapabilities.prototype, {
    [Symbol.toStringTag]: {
        value: "MediaCapabilities",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
catchvm.memory.mediaCapabilities = {}
catchvm.memory.mediaCapabilities.__proto__ = MediaCapabilities.prototype
catchvm.memory.mediaCapabilities = catchvm.proxy(catchvm.memory.mediaCapabilities)






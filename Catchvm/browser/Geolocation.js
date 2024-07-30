var Geolocation = function Geolocation(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Geolocation)
Object.defineProperties(Geolocation.prototype, {
    [Symbol.toStringTag]: {
        value: "Geolocation",
        configurable: true
    }
});

catchvm.memory.geolocation = {}
catchvm.memory.geolocation.__proto__ = Geolocation.prototype
catchvm.memory.geolocation = catchvm.proxy(catchvm.memory.geolocation)
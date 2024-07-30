var Scheduling = function Scheduling(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Scheduling)
Object.defineProperties(Scheduling.prototype, {
    [Symbol.toStringTag]: {
        value: "Scheduling",
        configurable: true
    }
});

catchvm.memory.scheduling = {}
catchvm.memory.scheduling.__proto__ = Scheduling.prototype
catchvm.memory.scheduling = catchvm.proxy(catchvm.memory.scheduling)



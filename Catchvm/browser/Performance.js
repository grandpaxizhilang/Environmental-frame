var Performance = function Performance(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Performance)
Object.defineProperties(Performance.prototype, {
    [Symbol.toStringTag]: {
        value: "Performance",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Performance.prototype.eventCounts = {}
Performance.prototype.memory = {}
Performance.prototype.navigation = {}
Performance.prototype.onresourcetimingbufferfull = null
Performance.prototype.timeOrigin = {}
Performance.prototype.timing = {}


Performance.prototype.now = function now(){
    return 150328.69999999925
}

Performance.prototype.getEntries = function getEntries(){
    console.log(arguments)
    debugger
    return [{}]
}


///////////////////////////////////////////////////////////////

Performance.prototype.__proto__ = EventTarget.prototype

performance = {}
performance.__proto__ = Performance.prototype
performance = catchvm.proxy(performance)

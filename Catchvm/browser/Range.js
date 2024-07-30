var Range = function Range(){
    return catchvm.memory.Range();
};catchvm.func_set_natvie(Range);
Object.defineProperties(Range.prototype, {
    [Symbol.toStringTag]: {
        value: "Range",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Range.prototype.END_TO_END = 2
Range.prototype.END_TO_START = 3
Range.prototype.START_TO_END = 1
Range.prototype.START_TO_START = 0

///////////////////////////////////////////////////////////////

Range.prototype.__proto__ = AbstractRange.prototype

catchvm.memory.Range = function(){
    var range = {};
    ////////////////////////////////////////////////
    
    
    /////////////////////////////////////////////////

    range.__proto__ = Range.prototype;
    return catchvm.proxy(range);
};

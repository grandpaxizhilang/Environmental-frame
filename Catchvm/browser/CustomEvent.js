var CustomEvent = function CustomEvent(type){
    return catchvm.memory.customEvent(type)
};catchvm.func_set_natvie(CustomEvent);
Object.defineProperties(CustomEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "CustomEvent",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
CustomEvent.prototype.__proto__ = Event.prototype

catchvm.memory.customEvent = function(type){
    var customEvent = {};
    ////////////////////////////////////////////////
    customEvent.type = type
    
    /////////////////////////////////////////////////

    customEvent.__proto__ = CustomEvent.prototype;
    return catchvm.proxy(customEvent);
};

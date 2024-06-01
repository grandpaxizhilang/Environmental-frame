var Event = function Event(type){
    return catchvm.memory.Events['event'](type);
};catchvm.func_set_natvie(Event);
Object.defineProperties(Event.prototype, {
    [Symbol.toStringTag]: {
        value: "Event",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////

Event.prototype.type = '';
Event.prototype.bubbles = '';
Event.prototype.cancelable = '';
Event.prototype.composed = '';


Event.prototype.AT_TARGET = 2;
Event.prototype.BUBBLING_PHASE = 3;
Event.prototype.CAPTURING_PHASE = 1;
Event.prototype.NONE = 1;


///////////////////////////////////////////////////////////////

catchvm.memory.Events['event'] = function(type){
    var event = {};
    ////////////////////////////////////////////////
    if(type != undefined){
        event.type = type;
    }else{
        event.type = ''
    }
    event.bubbles = false;
    event.cancelable = false;
    event.composed = false;
    /////////////////////////////////////////////////

    event.__proto__ = Event.prototype;
    return catchvm.proxy(event);
};

catchvm.memory.Events['events'] = function(type){
    return catchvm.memory.Events['event'](type);
};



///////////////////////////////////////////////////////////////
Event.prototype.__defineGetter__("type",function(){
    throw TypeError("Illegal invocation")
})
Event.prototype.__defineGetter__("bubbles",function(){
    throw TypeError("Illegal invocation")
})
Event.prototype.__defineGetter__("cancelable",function(){
    throw TypeError("Illegal invocation")
})
Event.prototype.__defineGetter__("composed",function(){
    throw TypeError("Illegal invocation")
})
Event.prototype.__defineGetter__("AT_TARGET",function(){
    throw TypeError("Illegal invocation")
})
Event.prototype.__defineGetter__("BUBBLING_PHASE",function(){
    throw TypeError("Illegal invocation")
})
Event.prototype.__defineGetter__("CAPTURING_PHASE",function(){
    throw TypeError("Illegal invocation")
})
Event.prototype.__defineGetter__("NONE",function(){
    throw TypeError("Illegal invocation")
})


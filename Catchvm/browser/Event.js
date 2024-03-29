var Event = function Event(type){
    var event = new (function(){});
    event.__proto__ = Event.prototype;
    event.type = type;
    return catchvm.proxy(event);
};catchvm.func_set_natvie(Event);
Object.defineProperties(Event.prototype, {
    [Symbol.toStringTag]: {
        value: "Event",
        configurable: true
    }
});

///////////////////////////////////////////////////////////////
Event.prototype.type = '';
Event.prototype.bubbles = false;
Event.prototype.cancelable = false;
Event.prototype.composed = false;


Event.prototype.AT_TARGET = 2;
Event.prototype.BUBBLING_PHASE = 3;
Event.prototype.CAPTURING_PHASE = 1;
Event.prototype.NONE = 1;
///////////////////////////////////////////////////////////////

catchvm.memory.Events['event'] = function(){
    var event = new (function(){});
    event.__proto__ = Event.prototype;
    return event;
};

catchvm.memory.Events['events'] = function(){
    var event = new (function(){});
    event.__proto__ = Event.prototype;
    return event;
};
